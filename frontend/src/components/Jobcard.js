import React from 'react'

const Jobcard = ({title,company,location,description,apply,ind,jobId}) => {
  return (
    <div><div className="card-content " >
    <h3 className="card-heading"> Job Title: {title}</h3>
    <p className="card-text"> Company: {company}</p>
    <p className="card-text"> Location: {location}</p>
    <p className="card-text m-2"> Description: {description}</p>
    <button className='appliedjobBtn' onClick={apply}> Apply </button>
</div></div>
  )
}

export default Jobcard