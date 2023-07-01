import React from 'react'
import './LinkComp.css'


const LinkComp = (props) => {
  const stle = {
    backgroundColor:props.x
  }
  return (
    <div className='comp' style={stle}>
        <img src={props.pic} alt={props.pic} />
        <a href={props.data}>{props.name}</a>
    </div>
  )
}

export default LinkComp