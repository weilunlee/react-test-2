import React, { useState } from 'react'
// import './Calander.css'


const CalanderBody =(props)=>{
    let date = props.date
    let ts = new Date(date).getTime()
    let today = new Date()
    let first_date_of_month = new Date(ts).setDate(1)
    let day_of_first_date = new Date(first_date_of_month).getDay()              // 用來扣掉起始日，算出前面幾天上個月的時間

    const grid_number = 35
    const grid = [...new Array(grid_number)]
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    function handleClick(_index) {
        if (startDate === null || endDate !== null) {
            // 設置起始日期 (First click date to set it as start date value. )
            setStartDate(_index);
            setEndDate(null);
        } else if (_index >= startDate) {
            // 若日期 > start date，則設end date (Next click date is same as current select option or later than current  option will set it as end date value.)
            setEndDate(_index);
        } else {
            // 若日期 < start date，重設 start date (Next click date is earlier than current option will reset start date  value.)
            setStartDate(_index);
            setEndDate(null);
        }
    }
    
    function handleColor(_index, _date){
        const isSameYear = _date.getFullYear() === new Date().getFullYear();
        const isSameMonth = _date.getMonth() === new Date().getMonth();
        const isSameDate = _date.getDate() === new Date().getDate();

        if(!isSameMonth) return 'non-current-month'
        if((_index<=endDate && _index >= startDate) || (_index===startDate)) return 'chosen'
        if (isSameYear && isSameMonth && isSameDate) return 'today'
        if(endDate===null && startDate===null) return ''
        else return ''
    }

    return(
        <div className='grid-body'>
            {grid.map((res, index)=>{
                let _date = new Date(first_date_of_month+(index-day_of_first_date)*86400000)
                return <div key={index}
                    className={`day-button flex-col ${handleColor(index, _date)}`}
                    onClick={()=>{handleClick(index)}}>
                    {_date.getDate()}日                      
                </div>
            })}
        </div>
    );

}
export default CalanderBody;