import React from 'react'

const Bar = ({color, backgroundColor, percent}) => {

    const BarStyling = {
        color: color,
        backgroundColor: backgroundColor,
        width: percent/100*200+'px', 
    }
    return (
        <div style = {BarStyling}>
            <h1>Получилось</h1>
        </div>
    )
}

export default Bar
