'use client';

import React from 'react'

import { TailSpin } from 'react-loader-spinner'

const LoadingPage = () => {
  return (
    <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>

            <div className='loader off-set mt-5'>
                <div className='text-center'>
                <TailSpin
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                </div>
            </div>

        </div>
        <div className='col-md-4'></div>
    </div>
  )
}

export default LoadingPage