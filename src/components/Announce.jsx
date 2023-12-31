import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Announce = () => {
    //state
    const [announce,setAnnounce] = useState('flex justify-center items-center bg-green-500 text-white font-bold p-1 animate-bounce')


  //set timeout
  const TIMEOUT = 20000;
  setTimeout(()=>{
    announceHandler()

},[TIMEOUT])

    //close announce bar onclick
    const announceHandler = () => {
      setAnnounce('hidden')
    }
  return (
    <div className={announce}>
      <h2>Hurry Up its 40% off now </h2>     
      <CloseIcon className='cursor-pointer' onClick={announceHandler}/>
    </div>
  )
}

export default Announce
