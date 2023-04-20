import React from 'react'

import Repos from '@/app/components/repos'
import ReposDir from '@/app/components/Reposdir'

export const metadata = {
  title: "Repository description",
}
const ReposName = ({ params: {name} }) => {
 
  return (
    <div className='row'>
      <div className='col-md-2'></div>
      <div className='col-md-8'>
        <div className='card mt-5'>
          <div className='card-header'>{name}</div>
          <Repos name={name} />
          <ReposDir name={name} />
        </div>
      </div>
      <div className='col-md-2'></div>
    </div>
  )
}

export default ReposName