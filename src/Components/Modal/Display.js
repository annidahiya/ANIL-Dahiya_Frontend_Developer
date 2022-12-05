import React from 'react'
import "./display.css"
export const Display = ({open,onClose,data}) => {
  if(!open) return null
  return (
<>
<div className='overLay'/>
<div className='displayContainer'>
    <h1>capsule_id
{data.capsule_id
}</h1>
   <p>capsule_serial :<span>{data.capsule_serial}</span></p>
   <p>details:<span>{data.details}</span></p>
   <p>landings :<span>{data.landings}</span></p>
   <p>original_launch
 :<span>{data.original_launch
}</span></p>
   <p>original_launch_unix
 :<span>{data.original_launch_unix
}</span></p>
{/*  */}
<p>reuse_count
 :<span>{data.reuse_count

}</span></p>


<p>status
 :<span>{data.status
}</span></p>
<p>type
 :<span>{data.type
}</span></p>
   <button className='btn close' onClick={onClose}>close</button>
    </div>
</>
  )
}
