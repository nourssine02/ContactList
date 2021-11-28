import React from 'react'
import Contact from '../Components/Contact';

function ContactList({ contactList, handleDelete }) {

    return (
        <div >

            {contactList.map((contact, index) => {
                return <fieldset style={{ border: '2px dashed' }}>
                    <h1 style={{ color: 'green' }} >Contact: </h1> <Contact form={contact} index={index} />
                    <button onClick={() => handleDelete(contact.id)} type="submit">Delete</button>
                </fieldset>
            })}

        </div>
    )
}
export default ContactList