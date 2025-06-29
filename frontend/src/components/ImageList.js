import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './../CSSFolder/imagelist.css'

const ImageList = () => {

    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        const response = await axios.get('https://image-wallet-backend.vercel.app/api/image/');
        setStudents(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        fetchStudents();
    }, []);
    return (
        <div className='allimage-container-box'>
            <h2>Image List</h2>
            <div className='stdentslist'
            >
                {students ? students.map((student) => (
                    <div className="imagelist-frame-box" key={student._id}>
                        <Link className='alllink' to={`/image/${student._id}`}>
                            <img className='allimage' src={student.url} alt={student.name} />
                            <div className='allname'>{student.name}</div>
                        </Link>
                    </div>
                )) : <p>Loading...</p>}

            </div>
        </div>
    );
};
export default ImageList;
