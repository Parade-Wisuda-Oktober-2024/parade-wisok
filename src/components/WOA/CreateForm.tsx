"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { submitWOA } from "~/app/actions/submit-WOA";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "~/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Switch } from "../ui/switch";
import { signIn, signOut } from "next-auth/react";

const fakultas = [
  "",
  "FITB",
  "FMIPA",
  "FSRD",
  "FTI",
  "FTMD",
  "FTTM",
  "FTSL",
  "SAPPK",
  "SBM",
  "SF",
  "SITH",
  "STEI",
];

const formSchema = z.object({
  toUser: z.string().min(1, {
    message: "Please select a wisudawan",
  }),
  content: z.string().min(2, {
    message: "Content must be at least have 2 characters",
  }),
  sender: z.string(),
  anon: z.boolean(),
});

interface User {
  id: string;
  nim: string;
  profile: {
    name: string;
    faculty: string | null;
    major: string | null;
  } | null;
}

export function CreateWOA({
  users,
  senderId,
}: {
  users: User[];
  senderId: string | undefined;
}) {
  const handleSignOut = async () => {
    const result = await signOut();
  };
  const handleSignIn = async () => {
    const result = await signIn("credentials", {
      redirect: true,
      nim: "1652311",
      password: "hashedpassword11",
    });

    if (result?.error) {
      console.error(result.error);
    } else {
      console.log("sign in success");
    }
  };
  const [openName, setOpenName] = React.useState(false);
  const [valueName, setValueName] = React.useState("");
  const [openFilter, setOpenFilter] = React.useState(false);
  const [valueFilter, setValueFilter] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(users);

  const handleFilter = (value: string) => {
    const filtered = users.filter((users) =>
      users.profile?.faculty?.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredData(filtered);
    setValueName("");
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      toUser: "",
      content: "",
      anon: senderId === undefined,
      sender: senderId ?? "",
    },
  });

  const anon = useWatch({
    control: form.control,
    name: "anon",
  });

  React.useEffect(() => {
    if (anon || senderId === undefined) {
      form.setValue("sender", "");
    } else {
      form.setValue("sender", senderId);
    }
  }, [anon, senderId, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    submitWOA(values);
  }

  return (
    <Form {...form}>
      <Popover open={openFilter} onOpenChange={setOpenFilter}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openFilter}
            className="w-[200px] justify-between"
          >
            {valueFilter ? valueFilter : "Fakultas"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandGroup>
                {fakultas.map((fakultas) => (
                  <CommandItem
                    key={fakultas}
                    value={fakultas}
                    onSelect={(currentValue) => {
                      setValueFilter(
                        currentValue === valueFilter ? "" : currentValue,
                      );
                      setOpenFilter(false);
                      handleFilter(
                        currentValue === valueFilter ? "" : currentValue,
                      );
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valueFilter === fakultas ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {fakultas}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="toUser"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To:</FormLabel>
              <FormControl>
                <Popover open={openName} onOpenChange={setOpenName}>
                  <PopoverTrigger asChild>
                    <Input
                      className="w-[200px]"
                      value={
                        valueName
                          ? filteredData.find((user) => user.id === valueName)
                              ?.profile?.name
                          : ""
                      }
                      placeholder="Select a user"
                      readOnly
                    />
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search for a user..." />
                      <CommandList>
                        <CommandEmpty>No users found.</CommandEmpty>
                        <CommandGroup>
                          {filteredData.map((user) => (
                            <CommandItem
                              key={user.id}
                              onSelect={() => {
                                setValueName(user.id);
                                field.onChange(user.id);
                                setOpenName(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  valueName === user.id
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                              {user.profile?.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Type Your Message Here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="anon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Send Anonymously?</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={senderId === undefined} // Disable the switch if senderId is undefined
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
      <br></br>
      <Button onClick={handleSignIn}>Sign In</Button>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </Form>
  );
}
