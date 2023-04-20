import React from 'react'

import Link from 'next/link';

import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa';

async function fetchRepos() {

    const response = await fetch('https://api.github.com/users/sharifumasudi/repos');
    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const repos =  await response.json();

    return repos;
}

const ReposPage = async () => {

    const reposData = await fetchRepos();

    // console.log(reposData);

  return (
    
    <div className='container'>
    <div className='row'>

        <div className='col-md-2'></div>

        <div className='col-md-8'>
            <h1 className='display-6 text-center border bg-white mt-2'>Repositories</h1>
            {
                reposData.map(repos => (

                    <div className='card mt-3 mb-3' key={repos.id}>
                        <div className='card-header'>{repos.name}</div>
                        <div className='card-body'>
                        <p>{repos.description}</p>
                        <span><Link href={`/repos/codes/${repos.name}`}>Visit</Link></span>
                        <div className='float-end d-flex flex-row'>
                        <span><FaStar/> {repos.stargazers_count}</span>
                        <span><FaEye/> {repos.watchers_count}</span>
                        <span><FaCodeBranch/> {repos.forks_count}</span>
                        </div>
                        </div>
                    </div>

                ))
            }

        </div>
        <div className='col-md-2'></div>

    </div>
    </div>
  )
}

export default ReposPage