import React from 'react'


function Contact({ form }) {
    let { gender, name, age, date, country } = form
    return (
        < div>
            <h2>gender:  {gender}</h2>
            <h2>name:   {name}</h2>
            <h2>age:  {age}</h2>
            <h2>date:   {date}</h2>
            <h2>country:  {country}</h2>


        </div>
    )
}

export default Contact



