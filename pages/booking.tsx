import type { NextPage } from 'next'
import React ,{ useState } from 'react'


const Booking: NextPage = () => {

    const [bookNum, setBookNum] = useState<string>('1002')

  return (
   <div>
    <h1>Booking Page {bookNum} </h1>
    <div className="text-red-500 text-3xl font-bold underline">Hello</div>
    <div className="text-red-500 text-3xl font-bold underline">Welcome</div>
   </div>
  )
}

export default Booking