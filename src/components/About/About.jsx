import React from 'react'

const About = ({about}) => {

  return (
    <div>
        {about.map((item, index) =>{
            return(
                <div key ={index}>
                <h3> {item.info}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default About


