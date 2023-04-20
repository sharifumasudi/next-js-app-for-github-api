import Link from 'next/link'

import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h2 className='text-center mt-5'>Home Page</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <p className='m-3'>
                This is NextJs application which show on how to interact with github api to show public repositories.  
              </p>
              <p className='m-3'>
              <h4 className='text-center font-weight-bolder'>
                All Repositories must be Public
              </h4>
                Sample github api: <b>https://api.github.com/users/your-username/repo</b>
              </p>
              <p className='m-3'>
                To start enjoying how it works please click here...
                <Link className='btn btn-link text-decoration-none' href="/repos">Repositories</Link>
                <br/>
                Please come across to my portifolio for any concern about me

                <Link href={`https://sharifumasudi.netlify.app/`} className='btn btn-link text-decoration-none'>Click here..</Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage