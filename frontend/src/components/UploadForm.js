import React, { useState } from 'react';
import axios from 'axios';
import './../CSSFolder/uploadform.css'
import { MdCloudUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const UploadForm = ({ fetchStudents }) => {
    const [name, setName] = useState('');
    const [discription, setdiscription] = useState('');
    // const [email, setEmail] = useState('');
    const [profilePhoto, setProfilePhoto] = useState();
    const [fileName, setFileName] = useState('No file chosen');

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const fileNames = Array.from(files).map((file) => file.name).join(', ');
      setFileName(fileNames);
    } else {
      setFileName('No file chosen');
    }
  };
  const clearalldata = () => {
    setName('');
    setdiscription('');
    setProfilePhoto(null);
    setFileName('No file chosen')
  }
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
                <input style={{display:'none'}} onChange={handleFileChange} className='input' id='choose-input' type="file" accept=".jpg,.jpeg,.png" 
                // onChange={(e) => setProfilePhoto(e.target.files[0])} 
                required 
                />
                { fileName === 'No file chosen' ? <label htmlFor="choose-input" 
                style={{
                    // display: 'inline-block',s
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '15px',
                    width:'45%',
                    height:'100px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                  }}
                  >Choose Image</label> : <span style={{ marginLeft: '10px', color: '#555' }}>{fileName} <button className='all-clear-btn' onClick={clearalldata}><RxCross2 /></button></span>}
                  
                <button className='btn' type="submit"><MdCloudUpload className='upload-icon'/> Upload</button>
                </div>
            </form>
        </div>
    );
};

export default UploadForm;
