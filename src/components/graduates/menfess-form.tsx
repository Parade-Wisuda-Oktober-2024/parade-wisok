"use client";

import {Button} from "~/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "~/components/ui/form";
import {Input} from "~/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod";
import {Loader2} from "lucide-react";
import {type SubmitHandler, useForm} from "react-hook-form";
import * as z from "zod";
import {Textarea} from "~/components/ui/textarea";
import {SearchInput} from "~/components/filter/search";
import * as React from "react";
import {useEffect, useState} from "react";
import {useAction} from "next-safe-action/hooks";
import {submitWOA} from "~/app/actions/submit-WOA";
import {toast} from "sonner";
import {searchWOA} from "~/app/actions/search-WOA";

const menfessSchema = z.object({
  targetName: z.string(),
  targetNIM: z.string().max(8),
  targetMajor: z.string(),
  content: z.string(),
  sender: z.string().optional()
});

interface MenfessFormProps {
  onFinishSubmit?: () => void;
  setIsOpen: (value: boolean) => void;
  update?: () => void;
}

const MenfessForm = ({onFinishSubmit, setIsOpen, update}: MenfessFormProps) => {
  const [wisudawan, setWisudawan] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  // Form Hooks
  const form = useForm<z.infer<typeof menfessSchema>>({
    resolver: zodResolver(menfessSchema),
    defaultValues: {
      targetName: "",
      targetNIM: "",
      targetMajor: "",
      content: "",
      sender: ""
    },
  })
  const {execute, isExecuting} = useAction(submitWOA, {
    onSuccess: () => {
      setIsOpen(false);
      update?.();
      toast.success("Menfess sent successfully");
    },
    onError: ({error: {serverError, validationErrors}}) => {
      toast.error(!!validationErrors ? "Invalid input" : serverError ?? "An error occurred");
    }
  });

  const {execute: exeList, result} = useAction(searchWOA);

  useEffect(() => {
    exeList({nameOrNim: wisudawan, content: wisudawan});
  }, [exeList, wisudawan])

  const {
    control,
    handleSubmit,
    formState: {isSubmitting},
    setValue
  } = form;
  const graduates_ = result.data?.map(({name, major, nim}) => ({name, major, NIM: nim}));
  // Handle submit
  const onSubmit: SubmitHandler<z.infer<typeof menfessSchema>> = async (data, e) => {
    // Success response (simulating back-end behavior)
    e?.preventDefault();
    execute({sender: data.sender ?? "Anon", ...data});

    // Call onFinishSubmit callback
    onFinishSubmit?.();
  };
  let graduatesName = graduates_?.map(({name}) => name);
  graduatesName = [...new Set(graduatesName)];

  const graduates = graduatesName.map((name) => {
    return graduates_?.find(({name: n}) => n.toLocaleLowerCase() === name.toLocaleLowerCase());
  })

  return (
    <Form {...form}>
      <form onSubmit={(e) => handleSubmit(onSubmit)(e)} className="flex flex-col text-base md:text-lg lg:text-xl gap-4">
        <div className="flex flex-col gap-2">
          {/* From (sender) */}
          <div className="flex gap-4 items-center mb-3">
            <SearchInput setVal={setWisudawan} className='max-h-12 w-auto bg-[#401571]/85' data-aos="fade-up"
                         data-aos-delay="50"
                         onInput={() => setIsTyping(true)}
                         onFocus={() => setIsTyping(true)}
                         onBlur={() => setIsTyping(false)}>
              <div
                className={`absolute w-full grid [transition-property:_height,_top,_border-width] rounded-md [transition-delay:_200ms,_0s,_200s] duration-300 border-[#F4D38E] min-h-0 overflow-hidden ${isTyping ? " top-14 border-2" : "border-0 top-14"}`}
                style={{
                  height: isTyping ? "300px" : "0",
                }}>
                <div
                  className={`bg-[#421370]/90 overflow-y-scroll min-h-0 w-full transition-all duration-300 rounded-md ${isTyping && "first:mt-2 last:mb-2"} px-4 divide-amber-300 divide-y-2 `}>
                  {graduates?.map((grad, i) => {
                    if (!grad) return null;
                    const {name, NIM, major} = grad;
                    return (
                      <div className="flex py-2 w-full text-[#F4D38E] justify-between" key={i + name + NIM}
                           onClick={() => {
                             setValue("targetName", name);
                             setValue("targetNIM", NIM);
                             setValue("targetMajor", major);
                             setIsTyping(false);
                           }}>
                        <div className="">
                          <h4 className='capitalize text-sm'>{name}</h4>
                          <h4 className='capitalize text-sm'>{NIM}</h4>
                        </div>
                        <h4 className="capitalize text-sm">{major}</h4>
                      </div>
                    )
                  })}
                  {!graduates && <div className="flex justify-center text-[#F4D38E] mt-4">No result found</div>}
                </div>
              </div>
            </SearchInput>
          </div>
          <FormField
            control={control}
            disabled={isSubmitting}
            name="sender"
            render={({field: {value, onChange}, ...field}) => (
              <FormItem>
                <FormLabel className="font-paragraph text-base md:text-lg font-semibold text-[#FEE59A]">
                  Nama/Anon
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    value={value ?? ""}
                    onChange={(e) => onChange(e.target.value)}
                    className=" bg-[#401571]/85 font-paragraph text-[#FEE59A] h-12 border-0 file:text-[#FEE59A] placeholder:text-[#FEE59A] focus-visible:ring-[#FEE59A] "
                    placeholder="Nama (optional)"
                    {...field}
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          {/* Message */}
          <div className="flex gap-4 w-full flex-col md:flex-row flex-1">
            <FormField
              control={control}
              disabled={isSubmitting}
              name="targetName"
              render={({field: {value, onChange}, ...field}) => (
                <FormItem className='w-full'>
                  <FormLabel className="font-paragraph text-base md:text-lg font-semibold text-[#FEE59A]">
                    Wisudawan
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      value={value ?? ""}
                      onChange={(e) => onChange(e.target.value)}
                      className=" bg-[#401571]/85 font-paragraph text-[#FEE59A] h-12 border-0 w-full flex-1 file:text-[#FEE59A] placeholder:text-[#FEE59A] focus-visible:ring-[#FEE59A] "
                      placeholder="Nama"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              disabled={isSubmitting}
              name="targetNIM"
              render={({field: {value, onChange}, ...field}) => (
                <FormItem className=' min-w-44'>
                  <FormLabel className="font-paragraph text-base md:text-lg font-semibold text-[#FEE59A]">
                    NIM Wisudawan
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      value={value ?? ""}
                      onChange={(e) => onChange(e.target.value)}
                      className=" bg-[#401571]/85 font-paragraph text-[#FEE59A] h-12 border-0 file:text-[#FEE59A] placeholder:text-[#FEE59A] focus-visible:ring-[#FEE59A] "
                      placeholder="NIM"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              disabled={isSubmitting}
              name="targetMajor"
              render={({field: {value, onChange}, ...field}) => (
                <FormItem className="min-w-64">
                  <FormLabel className="font-paragraph text-base md:text-lg font-semibold text-[#FEE59A]">
                    Jurusan Wisudawan
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      value={value ?? ""}
                      onChange={(e) => onChange(e.target.value)}
                      className=" bg-[#401571]/85 font-paragraph text-[#FEE59A] h-12 border-0 file:text-[#FEE59A] placeholder:text-[#FEE59A] focus-visible:ring-[#FEE59A] "
                      placeholder="Jurusan"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            disabled={isSubmitting}
            name="content"
            render={({field}) => (
              <FormItem>
                <FormLabel className="font-paragraph text-base md:text-lg font-semibold text-[#FEE59A]">
                  Pesan
                </FormLabel>
                <FormControl>
                  <Textarea
                    className=" bg-[#401571]/85 font-paragraph text-[#FEE59A] border-0 h-40 file:text-[#FEE59A] placeholder:text-[#FEE59A] focus-visible:ring-[#FEE59A]"
                    placeholder="Tuliskan sebuah pesan yang berharga"
                    {...field}
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-center">
          {/* Submit Button */}
          <Button
            variant="default"
            size="lg"
            className="w-32 md:w-44 h-12 md:h-16 border-2 border-transparent bg-[#401571] font-paragraph font-semibold mt-5 text-[#FEE59A]
            ring-offset-[#4e0000] hover:bg-[#FFDFA4]/90 focus-visible:ring-[#FEE59A] 
            rounded-full bg-gradient-to-r from-[#FEE59A] to-[#FFD700] p-[2px] bg-clip-padding"
            type="submit"
            disabled={isSubmitting || isExecuting}
          >
            <div className="w-full h-full rounded-full bg-[#401571] flex items-center justify-center">
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
              <p
                className="md:text-3xl text-xl font-paragraph font-bold xs:text-xs drop-shadow-[0_0_10px_rgba(252,211,77,0.8)]"> Submit</p>
            </div>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export {MenfessForm};
