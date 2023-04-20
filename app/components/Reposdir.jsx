import Link from 'next/link';
import React from 'react'

async function fetchDir(name){

    const reposDir = await fetch(
        `https://api.github.com/repos/sharifumasudi/${name}/contents`
    );

    const response = await reposDir.json();

    return response;
}

const ReposDir = async ({name}) => {

    const contents = await fetchDir(name);

    const dirs = contents.filter((content) => content.type === 'dir');

    console.log(dirs);

  return (
    <div>
        <div className='card card-header m-3'>Directories</div>
        <ul className='text-primary'>
            {
                dirs.map((dir) => (
                    <li key={dir.path}>
                        <Link href={`/repos/codes/${name}/${dir.path}`}>{dir.path}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ReposDir