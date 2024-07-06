"use client"

import { PlusIcon } from "lucide-react"
import { Button } from "../ui/button"
import { FC } from "react"
import { useRouter } from "next/navigation"

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    
    const router = useRouter()

    const navCreateJobPage = () => router.push('/post-job')

  return (
	<div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
			<div>
				<div>Company</div>
				<div className="font-semibold">kajdkasdka</div>
			</div>
			<div>
				<Button
				 	onClick={navCreateJobPage}
					className="rounded-none py-3 px-6"
				>
					<PlusIcon className="mr-2 w-4 h-4" />
					Post a job
				</Button>
			</div>
		</div>
  )
}

export default Header