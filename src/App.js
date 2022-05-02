import React from 'react'
import {useState} from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Upominky from './components/Upominky'

const App = () => {
  const [upominky,setupominky] = useState([])

const deleter = (id)=>{
  setupominky(upominky.filter((upo)=>upo.id !==id)) 
}
const setActive = (id)=>{
  setupominky(upominky.map(upo=>upo.id===id?{...upo,rem: !upo.rem}:upo))
}

const addUpo = (x)=>{
  const id = Math.round(Math.random()*10000)
  const newOne = {id,...x}
  setupominky([newOne , ...upominky])
}

const [formActive, setFormActive] = useState(false)
  return (
    <div>
      <Header setFormActive={()=>setFormActive(!formActive)} formActive={formActive}></Header>
      {formActive && <Form addUpo={addUpo} setFormActive={()=>setFormActive(false)}></Form>}
      {upominky.length>0?<Upominky upominky={upominky} deleter={deleter} setActive={setActive}></Upominky>:<h3>Nemáš žádné upomínky</h3>}
    </div>
  )
}

export default App