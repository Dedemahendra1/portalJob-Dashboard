import OverviewForm from '@/components/forms/OverviewForm'
import SocialMediaForm from '@/components/forms/SocialMediaForm'
import TeamForms from '@/components/forms/TeamForms'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { FC } from 'react'

interface SettingPagesProps {}

const SettingPages: FC<SettingPagesProps> = ({}) => {
  return (
    <div>
      <div className='font-semibold text-3xl mb-5'>
          Settings
      </div>
       
      <Tabs defaultValue="overview">
				<TabsList className="mb-8">
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="socialLinks">Social Links</TabsTrigger>
					<TabsTrigger value="teams">Teams</TabsTrigger>
				</TabsList>
				<TabsContent value="overview">
					<OverviewForm />
				</TabsContent>
				<TabsContent value="socialLinks">
					<SocialMediaForm />
				</TabsContent>
				<TabsContent value="teams">
					<TeamForms  />
				</TabsContent>
			</Tabs>
    </div>
  )
}

export default SettingPages
