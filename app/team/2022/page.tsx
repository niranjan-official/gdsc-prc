import TeamMemberCard from '@/components/TeamMemberCard'
import React from 'react'

const page = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center bg-black px-10 md:px-16 lg:px-24 pt-32 pb-10' >
      <h3 className='text-4xl sm:text-6xl font-extrabold' >Team Members</h3>
      <span className='text-4xl font-extralight mt-2' >2022-2023</span>
      <div className="w-full flex justify-center flex-wrap gap-12 max-sm:gap-8 mt-8">
         {/* <TeamMemberCard/>
         <TeamMemberCard/>
         <TeamMemberCard/>
         <TeamMemberCard/> 
         <TeamMemberCard/> */}
        </div>
    </div>
  )
}

export default page
