import React from 'react'
import Questionmark from './Questionmark'


const Header = ({setFormActive, formActive}) => {
  return (
    <header>
        <Questionmark 
          backgroundColor='white' 
          text='Po přidání upomíky, jsou veškeré zobrazeny pod sebou, dvojím klinutím upomínku Aktivuješ, křížkem ji vymažeš'>
        </Questionmark>
        
        <h1>Remainder</h1>
        <div className='interact'>
          <button className={formActive?'redbutton':'bluebutton'} onClick={setFormActive}>{formActive?'zavři' :'přidej'}</button>
          {/* <input className='search' autoFocus onChange={(e)=>searching(e.target.value)}></input> */}
        </div>
    </header>
  )
}

export default Header