/*
    props.date:Date()               Date 物件格式，用來 pass 預設時間
    props.returnDate():function     函數，回傳更改後的Date
*/

import React from 'react'
const Header =(props)=>{
    let date = props.date

    function handleClick(_flag){
        let _date = new Date(date);
        let _newMonth = date.getMonth();
        let _newYear = date.getFullYear();          // 為了確保調整月份時，年份不會因為過一年後就跳回來
        
        if (_flag) {
            _newMonth--;
            if (_newMonth < 0) {
                _newYear--;
                _newMonth = 11;
            }
        } else {
            _newMonth++;
            if (_newMonth > 11) {
                _newYear++;
                _newMonth = 0;
            }
        }
        _date.setMonth(_newMonth);
        _date.setFullYear(_newYear);
        props.returnDate(_date);
    }

    return(
    <div className='flex-row header-box'>
        <div className='flex-col month-select' onClick={()=>{handleClick(true)}}></div>
        <div className='flex-row'>
            <div>{date.getFullYear()}</div>
            <div>年</div>
            <div>{date.getMonth()+1}</div>
            <div>月</div>
        </div>
        <div className='flex-col month-select' onClick={()=>{handleClick(false)}}></div>
    </div>
    );

}
export default Header;