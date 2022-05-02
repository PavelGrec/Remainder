import {useState} from 'react'

const Questionmark = ({backgroundColor,text})=>{
    const [questionmark, setQuestionmark] = useState(false)

  return (
    <button 
        style={{backgroundColor:backgroundColor,position:'absolute',top:'0px', right:'0px',margin:'10px'}}
        onClick={()=>setQuestionmark(!questionmark)}
    >
        ?
        {questionmark && <p style={{ position:'absolute', top:'50px',right:'0px', backgroundColor:'white',zIndex:100, padding:'10px',borderRadius:'20px'}}>{text}</p>}
    </button>
  )
}
const styleOfButton={color:'red', backgroundColor:'red'}
export default Questionmark