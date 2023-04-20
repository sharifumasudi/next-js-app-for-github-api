import Link from 'next/link';
import React, { Suspense } from 'react'

import { FaEye, FaStar, FaCodeBranch } from 'react-icons/fa';
async function fetchRepos(name)
{
    const response = await  fetch(
        `https://api.github.com/repos/sharifumasudi/${name}`,{

            next: {
                revalidate: 60,
            },
        }
    );

    const repos = await response.json();

    return repos;
}

const Repos = async ({ name }) => {

    const res = await fetchRepos(name);

    console.log(res);

    return (
        <div className='card-body'>
        <Suspense fallback={<div>Loading....</div>}>
            {res.description}
            <div className='float-end d-flex flex-row'>
                <span><FaStar/> {res.stargazers_count}</span>
                <span><FaEye/> {res.watchers_count}</span>
                <span><FaCodeBranch/> {res.forks_count}</span>
            </div>
            <div className='btn btn-sm btn-link'>
                <Link href='/repos' >Go Back</Link>
            </div>
        </Suspense>
        </div>
    )
}

export default Repos