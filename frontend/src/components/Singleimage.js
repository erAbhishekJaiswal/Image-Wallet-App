import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './../CSSFolder/singleimage.css';
import { MdOutlineFileDownload } from "react-icons/md";

const Singleimage = () => {
    const stu = useParams();
    const [student, setStudent] = useState(null);
    useEffect(() => {
        const fetchStudent = async () => {
            const response = await axios.get(`http://localhost:5000/api/students/${stu.id}`);
            setStudent(response.data);
        };
        fetchStudent();
    }, [stu.id]);
    if (student) { var date = new Date(student.updatedAt); }
    const handleDownload = async () => {
        try {
            // Fetch the file
            const response = await fetch(`http://localhost:5000/${student.profilePhoto}`);
            if (!response.ok) {
                throw new Error('Failed to fetch file');
            }
            // Convert the response to a Blob
            const blob = await response.blob();
            // Create a Blob URL
            const blobUrl = window.URL.createObjectURL(blob);
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = student.name; // Specify the filename
            document.body.appendChild(link);
            // Trigger the download
            link.click();
            // Clean up
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    return (
        <>
            <div className="profilemainbox">
                { !student ? <h1>Loading </h1> : <> <div className='img-title'>{student.name}</div>
                <div className='profilecard'>
                    <div className="imagesection">
                        <img className='oneimage' src={`http://localhost:5000/${student.profilePhoto}`} alt={student.name} />
                    </div>
                    <div className='imageinfo-box'>
                        <div className='name'>{student.name}</div>
                        <div className='discription'>Discription: {student.discription}</div>
                        {/* <p>Uploaded At: {student.updatedAt}</p> */}
                        {student && <div className='date'>Uploaded By: {student ? date.toLocaleDateString('en-GB') : 'N/A'} {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</div>}
                        <div className='down-btns'><button onClick={handleDownload} className='download-btn'>Download <MdOutlineFileDownload style={{ fontSize: '20px' }} /></button></div>
                    </div>{/* {student && <p>Uploaded By: {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</p>} */}
                </div>
                <div className='suggested'>
                    <h1>Suggested</h1>
                    <div className='suggested-box'>
                        <div className='suggested-card'>
                            <img className='suggested-image' src={`http://localhost:5000/${student.profilePhoto}`} alt={student.name} />
                            <div className='suggested-name'>{student.name}</div>
                            {/* <div className='suggested-discription'>{student.discription}</div> */}
                        </div>
                        <div className='suggested-card'>
                            <img className='suggested-image' src={`http://localhost:5000/${student.profilePhoto}`} alt={student.name} />
                            <div className='suggested-name'>{student.name}</div>
                            {/* <div className='suggested-discription'>{student.discription}</div> */}
                        </div>
                        <div className='suggested-card'>
                            <img className='suggested-image' src={`http://localhost:5000/${student.profilePhoto}`} alt={student.name} />
                            <div className='suggested-name'>{student.name}</div>
                            {/* <div className='suggested-discription'>{student.discription}</div> */}
                        </div>
                        <div className='suggested-card'>
                            <img className='suggested-image' src={`http://localhost:5000/${student.profilePhoto}`} alt={student.name} />
                            <div className='suggested-name'>{student.name}</div>
                            {/* <div className='suggested-discription'>{student.discription}</div> */}
                        </div>
                    </div>
                </div>
                </> }
                
            </div>
        </>
    );
};

export default Singleimage;
