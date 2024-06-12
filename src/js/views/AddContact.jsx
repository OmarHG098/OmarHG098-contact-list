import React, { useState, useContext } from 'react'
import EditContact from '../component/EditContact.jsx'
import { useNavigate } from 'react-router'
import ContactsForm from '../component/ContactsForm.jsx'

const AddContact = () => {
  return (
    <div>
        <ContactsForm btnContent={"Save"}/>
    </div>
  )
}

export default AddContact