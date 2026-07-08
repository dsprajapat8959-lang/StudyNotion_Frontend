import React from 'react'
import RenderSteps from './RenderSteps'
import List from './List'


const Index = () => {
  return (
    <div className='w-full'>
        <h1 className='text-richblack-25 font-bold text-3xl m-5'>Add cources</h1>
        <div className='flex '>
          <RenderSteps/>
        
         <List />

        </div>
        
      
    </div>
  )
}

export default Index
