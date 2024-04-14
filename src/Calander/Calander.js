import React, { useState } from 'react'
import Header from './Header';
import CalanderBody from './CalanderBody';
import './Calander.css'

const Calander =(props)=>{
    const [date, setDate] = useState(new Date())
    return(
        <div className='container flex-col'>
            <Header date={date} returnDate={setDate}/>
            <CalanderBody date={date}/>
        </div>
    );

}
export default Calander;