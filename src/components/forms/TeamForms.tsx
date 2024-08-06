"use client"

import React, { FC } from 'react'
import FieldInput from '../organize/FieldInput'
import { InstagramIcon, LinkedinIcon } from 'lucide-react'
import DialogAddTeam from './DialogAddTeam'


interface TeamFormProps{}

const TeamForms:FC<TeamFormProps> = ({}) => {
  return (
        <FieldInput
			title="Basic Information"
			subtitle="Add team members of your company"
		    >
			<div className="w-[65%] mb-5">
				<div className="flex flex-row justify-between items-center">
					<div className="text-lg font-semibold">
						Members
					</div>
					<DialogAddTeam />
				</div>
				<div className="grid grid-cols-3 gap-5 mt-6">
					{["meow","cheonma","cimeng"].map((item: string) => (
						<div key={item} className="p-3 shadow text-center">
							<div className="w-14 h-14 rounded-full bg-gray-300 mx-auto" />
							<div className="mt-4 font-semibold">
								{item}
							</div>
							<div className="text-sm text-gray-500">
								{item}
							</div>

							<div className="mt-5 inline-flex mx-auto gap-3 text-gray-500">
								<InstagramIcon className="w-4 h-4" />
								<LinkedinIcon className="w-4 h-4" />
							</div>
						</div>
					))}
				</div>
			</div>
		</FieldInput>
  )
}

export default TeamForms
