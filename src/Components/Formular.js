import React from 'react'
function Formular({ handleSubmit, handleChange, form, isChanged }) {

    let { gender, name, age, date, country } = form


    return (
        <div className={`${(isChanged) ? 'changed' : 'NotChanged'}`} style={{ border: '2px solid ', marginBottom: '10px' }} >
            <form onSubmit={handleSubmit}>
                <h1 style={{ color: 'green' }}>Formulaire</h1>
                <div className="form-group" name="gender">
                    Gender :
                    <input type="radio" value="Mr" checked={gender === 'Mr'} onChange={handleChange} name="gender" />
                    <label >Mr</label>
                    <input type="radio" value="Ms" checked={gender === 'Ms'} onChange={handleChange} name="gender" />
                    <label>Ms</label>
                </div>


                <div className="form-group">
                    Name : <input type="text" placeholder="Enter your name" value={name} name="name" onChange={handleChange} />

                </div>
                <div className="form-group">
                    Age : <input type="number" value={age} name="age" placeholder="Your age" onChange={handleChange} />
                </div>
                <div className="form-group">

                    Date <input type="date" value="date" name="date" value={date} onChange={handleChange} />
                </div>



                <div className="form-group">
                    <label>Dream Country: </label>
                    <select value="Please Select" value={country} onChange={handleChange} name="country">
                        <option value="FRA" name="FRA" >FRA</option>
                        <option value="USA">USA</option>
                        <option value="UK" >Uk</option>
                        <option value="TUN" >TUN</option>
                    </select>
                </div>
                <button type="submit" >Valider</button>
            </form>
            {/* <MyPreview />  */}



        </div>
    )
}
export default Formular