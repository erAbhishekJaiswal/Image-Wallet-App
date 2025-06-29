// import React, { useState } from 'react';
// import axios from 'axios';
// import './../CSSFolder/uploadform.css'
// import { MdCloudUpload } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";

// const UploadForm = ({ fetchStudents }) => {
//     const [name, setName] = useState('');
//     const [description, setdescription] = useState('');
//     // const [email, setEmail] = useState('');
//     const [image, setimage] = useState();
//     const [fileName, setFileName] = useState('No file chosen');

//   const handleFileChange = (event) => {
//     const files = event.target.files;
//     if (files.length > 0) {
//       const fileNames = Array.from(files).map((file) => file.name).join(', ');
//       setFileName(fileNames);
//     } else {
//       setFileName('No file chosen');
//     }
//   };
//   const clearalldata = () => {
//     setName('');
//     setdescription('');
//     setimage(null);
//     setFileName('No file chosen')
//   }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('description', description);
//         formData.append('image', image);
//         await axios.post('http://localhost:5000/api/students', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });

//         // fetchStudents(); // Refresh the student list
//         alert("Pofile created SuccseFully ")
//         setName('');
//         setdescription('');
//         // setEmail('');
//         setimage(null);
//     };

//     return (
//         <div className="imageuploaderbox">
//             <form className='imageform' onSubmit={handleSubmit}>
//                 <div className="heading">Upload New Image</div>
//                 <div className="inputbox">
//                     <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
//                 <input className='input' type="text" value={description} onChange={(e) => setdescription(e.target.value)} placeholder="description" required />
//                 {/* <input className='inputbox' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /> */}
//                 <input style={{display:'none'}} onChange={handleFileChange} className='input' id='choose-input' type="file" accept=".jpg,.jpeg,.png" 
//                 // onChange={(e) => setimage(e.target.files[0])} 
//                 required 
//                 />
//                 { fileName === 'No file chosen' ? <label htmlFor="choose-input" 
//                 style={{
//                     // display: 'inline-block',s
//                     padding: '10px 20px',
//                     backgroundColor: '#007bff',
//                     color: '#fff',
//                     borderRadius: '5px',
//                     cursor: 'pointer',
//                     fontSize: '15px',
//                     width:'45%',
//                     height:'100px',
//                     display:'flex',
//                     justifyContent:'center',
//                     alignItems:'center'
//                   }}
//                   >Choose Image</label> : <span style={{ marginLeft: '10px', color: '#555' }}>{fileName} <button className='all-clear-btn' onClick={clearalldata}><RxCross2 /></button></span>}
                  
//                 <button className='btn' type="submit"><MdCloudUpload className='upload-icon'/> Upload</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default UploadForm;














import React, { useState } from 'react';
import axios from 'axios';
import { MdCloudUpload } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import './../CSSFolder/uploadform.css'

const UploadForm = ({ fetchStudents }) => {
    const [name, setName] = useState('');
    const [description, setdescription] = useState('');
    const [image, setimage] = useState(null);
    const [fileName, setFileName] = useState('No file chosen');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setimage(file); // ✅ Set the file for upload
            setFileName(file.name);
        } else {
            setimage(null);
            setFileName('No file chosen');
        }
    };

    const clearAllData = () => {
        setName('');
        setdescription('');
        setimage(null);
        setFileName('No file chosen');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('image', image);

        try {
            await axios.post('https://image-wallet-backend.vercel.app/api/image', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert("Profile created successfully!");
            clearAllData();
            if (fetchStudents) fetchStudents(); // Optional refresh
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Upload failed. Please try again.');
        }
    };

    return (
        <div className="imageuploaderbox">
            <form className='imageform' onSubmit={handleSubmit}>
                <div className="heading">Upload New Image</div>
                <div className="inputbox">
                    <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                    <input className='input' type="text" value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Description" required />
                    
                    <input 
                        style={{ display: 'none' }} 
                        id='choose-input' 
                        type="file" 
                        accept=".jpg,.jpeg,.png" 
                        onChange={handleFileChange}
                        required 
                    />

                    {image ? (
                        <span style={{ marginLeft: '10px', color: '#555' }}>
                            {fileName} 
                            <button className='all-clear-btn' onClick={clearAllData} type="button"> <RxCross2 /></button>
                        </span>
                    ) : (
                        <label htmlFor="choose-input" style={{
                            padding: '10px 20px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '15px',
                            width: '92%',
                            height: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>Choose Image</label>
                    )}

                    <button className='btn' type="submit">
                        <MdCloudUpload className='upload-icon' /> 
                        Upload
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UploadForm;
