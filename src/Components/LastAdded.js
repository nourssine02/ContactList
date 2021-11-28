import React from 'react'

function LastAdded({ form, contactList }) {
    contactList.map((contact, i, contactList) => {
        if (i + 1 === contactList.length) {
            form = contact;

        }

    })
    return (
        <div>

            <fieldset style={{ border: "2px solid blue", marginBottom: '10px' }}>
                <h1 style={{ color: 'green' }}>LastAddedComponent </h1>
                <ul>
                    <li>Name:{form.name}</li>
                    <li>gender:  {form.gender}</li>
                    <li>age:  {form.age}</li>
                    <li>date:   {form.date}</li>
                    <li>country:  {form.country}</li>
                </ul>
            </fieldset>

        </div>
    )
}
export default LastAdded
