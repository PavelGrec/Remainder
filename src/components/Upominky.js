import React from 'react'
import Upominka from './Upominka'

const Upominky = ({upominky, deleter,setActive}) => {
  return (
    <main>
        {upominky.length>0 && <h3>Tvoje upomínky</h3>}
        <div className="upominkySection">
            {upominky.map((upo)=><Upominka key={upo.id} upo={upo} deleter={deleter} setActive={setActive}/>)}
        </div>

    </main>
  )
}

export default Upominky