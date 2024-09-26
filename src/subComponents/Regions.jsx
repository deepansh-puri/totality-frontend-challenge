import React from 'react'

const Regions = () => {
  return (
    <>
        <section id='regions'>
           <h1>OUR REGIONS</h1>
           <p>At Rentify, we’re dedicated to connecting property seekers with the perfect rental options across a diverse range of regions. Whether you're looking for a cozy apartment in a bustling city, a spacious house in a peaceful suburb, or a charming cottage in the countrysideExplore our regions to discover vibrant communities, unique neighborhoods, and the best that each area has to offer. With Rentify, finding your next home has never been easier.</p>
            <div className="region_container">

                <div className="card">
                    <img src='/region1.jpg' alt= "mountains"/>
                    <h2>Mountains</h2>
                    <p><span>80</span> Properties</p>
                </div>

                <div className="card">
                    <img src='/region2.jpg' alt= "coastline"/>
                    <h2>Coastline</h2>
                    <p><span>52</span> Properties</p>
                </div>


            </div>
        </section>
    </>
  )
}

export default Regions