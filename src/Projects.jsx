import React from 'react'

function Projects({projectDetails}) { //data recieve krna
  return (
    <div>
        <h1 className='text-xl'>Projects</h1>
        <h2 className=''>{projectDetails.Name} {projectDetails.Category}</h2>
        <h2 className=''></h2>
    </div>
  )
}

export default Projects