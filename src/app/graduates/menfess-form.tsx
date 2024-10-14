"use client";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
const menfessSchema = z.object({
  userId: z.string().optional(), // Menjadikan userId opsional
  sender: z.string().nullable(), // Tetap membiarkan sender sebagai opsional
  message: z.string().optional(), // Menjadikan pesan opsional
});
interface MenfessFormProps {
  targetUserId: string; // Target
  onFinishSubmit?: () => void;
}

const MenfessForm = ({ targetUserId, onFinishSubmit }: MenfessFormProps) => {
  // Form Hooks
  const form = useForm<z.infer<typeof menfessSchema>>({
    resolver: zodResolver(menfessSchema),
    defaultValues: {
      userId: targetUserId,
      sender: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  // Handle submit
  const onSubmit = async (values: z.infer<typeof menfessSchema>) => {
    // Success response (simulating back-end behavior)
    toast.success("Success", { description: "Menfess berhasil dikirim!" });

    // Call onFinishSubmit callback
    onFinishSubmit?.();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  gap-4">
        <div className="flex flex-col gap-2">
          {/* From (sender) */}
          <FormField
            control={control}
            disabled={isSubmitting}
            name="sender"
            render={({ field: { value, onChange }, ...field }) => (
              <FormItem>
                  <FormLabel className="font-paragraph font-semibold text-[#FEE59A]">
                    Nama/Anon
                  </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    value={value ?? ""}
                    onChange={(e) => onChange(e.target.value)}
                    className=" bg-[#401571AD] font-paragraph text-[#FEE59A] border-0 file:text-[#FEE59A] placeholder:text-[#FEE59A] focus-visible:ring-[#FEE59A] "
                    placeholder="Nama (optional)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={control}
            disabled={isSubmitting}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-paragraph font-semibold text-[#FEE59A]">
                  Pesan
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className=" bg-[#401571AD] font-paragraph text-[#FEE59A] border-0  file:text-[#FEE59A] placeholder:text-[#FEE59A] focus-visible:ring-[#FEE59A]"
                    placeholder="Tuliskan sebuah pesan yang berharga"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-center">
        {/* Submit Button */}
        <Button
          variant="default"
          size="lg"
          className="w-1/3 h-20 border-2 border-transparent bg-[#401571] font-paragraph font-semibold mt-5 text-[#FEE59A] 
            ring-offset-[#4e0000] hover:bg-[#FFDFA4]/90 focus-visible:ring-[#FEE59A] 
            rounded-full bg-gradient-to-r from-[#FEE59A] to-[#FFD700] p-[2px] bg-clip-padding"
          type="submit"
          disabled={isSubmitting}
        >
          <div className="w-full h-full rounded-full bg-[#401571] flex items-center justify-center">
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            <p className="text-3xl font-paragraph font-bold xs:text-xs drop-shadow-[0_0_10px_rgba(252,211,77,0.8)]"> Submit</p>
           
          </div>
        </Button>
        </div>
      </form>
    </Form>
  );
};

export { MenfessForm };
