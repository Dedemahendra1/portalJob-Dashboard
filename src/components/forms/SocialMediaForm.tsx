"use client"

import { FC } from "react"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import FieldInput from "../organize/FieldInput";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { socialMediaFormSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";

interface SocialMediaFormProp{}


const SocialMediaForm: FC<SocialMediaFormProp> = ({}) => {
    const form = useForm<z.infer<typeof socialMediaFormSchema>>({
		resolver: zodResolver(socialMediaFormSchema),
		// defaultValues: {
		// 	facebook: detail?.facebook,
		// 	instagram: detail?.instagram,
		// 	linkedin: detail?.linkedin,
		// 	twitter: detail?.twitter,
		// 	youtube: detail?.youtube,
		// },
	});

    const onSubmit = (values: z.infer<typeof socialMediaFormSchema>) => {
        console.log(values);
      }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <FieldInput
            title="Basic Information"
            subtitle="Add elsewhere links to your company profile. You can add only username without full https links."
        >
            <div className="space-y-5">
                <FormField
                    control={form.control}
                    name="facebook"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Facebook</FormLabel>
                            <FormControl>
                                <Input
                                    className="w-[450px]"
                                    placeholder="https://facebook.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="instagram"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Instagram</FormLabel>
                            <FormControl>
                                <Input
                                    className="w-[450px]"
                                    placeholder="https://Instagram.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Linkedin</FormLabel>
                            <FormControl>
                                <Input
                                    className="w-[450px]"
                                    placeholder="https://Linkedin.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="twitter"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Twitter</FormLabel>
                            <FormControl>
                                <Input
                                    className="w-[450px]"
                                    placeholder="https://Twitter.com/twitter"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="youtube"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Youtube</FormLabel>
                            <FormControl>
                                <Input
                                    className="w-[450px]"
                                    placeholder="https://Youtube.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </FieldInput>
        <div className="flex justify-end">
            <Button size="lg">Save Changes</Button>
        </div>
    </form>
</Form>
  )
}

export default SocialMediaForm
