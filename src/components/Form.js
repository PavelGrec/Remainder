import React from 'react'
import { useState } from 'react'

const Form = ({addUpo, setFormActive}) => {
    const [text, settext] = useState('')
    const [time, settime] = useState('')
    const [rem, setrem] = useState(true)

    const submit =(e)=>{
        e.preventDefault()
        console.log(text.value);
        text===false ||time===false ? alert('Chybí ti vyplněný Poznámka nebo text'):addUpo({text,time,rem})
        settext('')
        settime('')
        setrem(true)
        setFormActive(false)
    }




  return (
    <form onSubmit={submit}>
        <div className="text">
            <label htmlFor="text">Text poznámky</label>
            <input type="text" id='text' placeholder='poznamka:' onChange={(e)=>settext(e.target.value)} value={text}/>
        </div>
        <div className="time">
            <label htmlFor="cas">A kdy?</label>
            <input type="text" id='cas' placeholder='čas:' onChange={(e)=>settime(e.target.value)} value={time}/>
        </div>
        <div className="rem">
            <label htmlFor="rem">Má být aktivní</label>
            <input type="checkBox" id='rem' onChange={(e)=>setrem(e.currentTarget.checked)} checked={rem}/>
        </div>
        <input type="submit" value='Odeslat'/>

    </form>
  )
}

export default Form