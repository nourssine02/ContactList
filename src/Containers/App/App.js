import React, { useState, useEffect } from "react";
import Preview from "../../Components/Preview";
import ContactList from "../../Components/ContactList";
import LastAdded from "../../Components/LastAdded";
import Formular from "../../Components/Formular";


function App() {


  const [form, setform] = useState({
    gender: "Ms",
    name: "",
    age: "",
    date: "",
    country: ""
  });
  const [isChanged, setIsChanged] = useState(false);
  const [contactList, setContactList] = useState([]);







  useEffect(() => {
    console.log(contactList);
  }, [contactList])
  const handleChange = (event) => {
    setform({ ...form, [event.target.name]: event.target.value });
    if (!isChanged) {
      setIsChanged(true)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setContactList([...contactList, { ...form, id: contactList.length + 1 }])
  }

  const Myview = () => {
    return (isChanged) && <Preview form={form} />
  }

  const handleDelete = (id) => {
    console.log("delete This");
    const deleteForm = contactList.filter(item => {
      return item.id !== id
    });
    setContactList(deleteForm);
  }



  return (
    <div>
      <LastAdded form={form} contactList={contactList} />
      <Formular handleSubmit={handleSubmit} handleChange={handleChange} form={form} MyPreview={Myview} />
      <Preview form={form} />
      <ContactList contactList={contactList} handleDelete={handleDelete} />


    </div>

  );
}


export default App;
