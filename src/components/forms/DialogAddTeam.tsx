"use client"

import { Button } from '../ui/button'
import {
    Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { PlusIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '../ui/dialog'
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { Separator } from '../ui/separator'
import { useForm } from 'react-hook-form'
import { teamFormSchema } from '@/lib/formSchema'
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'


const DialogAddTeam = () => {
    const form = useForm<z.infer<typeof teamFormSchema>>({
		resolver: zodResolver(teamFormSchema),
	});

    const onSubmit = async (val: z.infer<typeof teamFormSchema>) => {
        console.log(val);
    }
  return (
        <Dialog>
			<DialogTrigger asChild>
				<Button>
					<PlusIcon className="h-4 w-4 mr-2" />
					Add member
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add new team</DialogTitle>
					<DialogDescription>
						Fill the field to add new team
					</DialogDescription>
				</DialogHeader>

				<Separator />

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-5"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="Name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="position"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Position</FormLabel>
									<FormControl>
										<Input
											placeholder="Position"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-2 gap-3">
							<FormField
								control={form.control}
								name="instagram"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Instagram</FormLabel>
										<FormControl>
											<Input
												placeholder="Instagram"
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
										<FormLabel>LinkedIn</FormLabel>
										<FormControl>
											<Input
												placeholder="LinkedIn"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<Button>Save</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
  )
}

export default DialogAddTeam
