import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Upominka = ({upo, deleter, setActive}) => {
  return (
    <div className={`Uposection ${upo.rem?'active':''}`} onDoubleClick={()=>setActive(upo.id)}>
        <h4>{upo.text} </h4>
        <p>{upo.time}</p>
       <p className='cross' onClick={()=>deleter(upo.id)}><FaTimes/></p>

    </div>
  )
}

export default Upominka