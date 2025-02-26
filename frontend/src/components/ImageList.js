import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './../CSSFolder/imagelist.css'

const ImageList = () => {

    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data);
        // console.log(response.data);
    };
    useEffect(() => {
        fetchStudents();
    }, []);
    return (
        <div className='allimage-container-box'>
            <h2>Image List</h2>
            <div className='stdentslist'
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Responsive columns
                    gap: '5px', // Space between images
                    width: '97%',
                }}>
                {students.map((student) => (
                    <>
                        <div className="imagelist-frame-box" >
                            <Link className='alllink' to={`/image/${student._id}`}>
                                <img className='allimage'
                                    src={`http://localhost:5000/${student.profilePhoto}`}
                                    alt={student.name} />
                                <div className='allname' key={student._id}>
                                    {student.name}
                                </div>
                            </Link>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};
export default ImageList;
