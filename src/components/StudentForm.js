import React, { useState } from 'react';
import axios from 'axios';
import './../CSSFolder/Newupload.css'

const StudentForm = ({ fetchStudents }) => {
    const [name, setName] = useState('');
    const [discription, setdiscription] = useState('');
    // const [email, setEmail] = useState('');
    const [profilePhoto, setProfilePhoto] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('discription', discription);
        // formData.append('email', email);
        formData.append('profilePhoto', profilePhoto);

        await axios.post('http://localhost:5000/api/students', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        // fetchStudents(); // Refresh the student list
        alert("Pofile created SuccseFully ")
        setName('');
        setdiscription('');
        // setEmail('');
        setProfilePhoto(null);
    };

    return (
        <div className="imageuploaderbox">
            <form className='imageform' onSubmit={handleSubmit}>
                <div className="heading">Upload New Image</div>
                <div className="inputbox">
                    <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input className='input' type="text" value={discription} onChange={(e) => setdiscription(e.target.value)} placeholder="Discription" required />
                {/* <input className='inputbox' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /> */}
                <input className='input' type="file" accept="image/*" onChange={(e) => setProfilePhoto(e.target.files[0])} required />
                <button className='btn' type="submit">Add Upload</button>
                </div>
            </form>
        </div>
    );
};

export default StudentForm;
