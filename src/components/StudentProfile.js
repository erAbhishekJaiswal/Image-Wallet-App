import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './../CSSFolder/Profile.css'


const StudentProfile = () => {
    const stu = useParams();
    // console.log(stu.id);

    const [student, setStudent] = useState(null);



    useEffect(() => {
        const fetchStudent = async () => {
            const response = await axios.get(`http://localhost:5000/api/students/${stu.id}`);
            setStudent(response.data);
        };
        fetchStudent();
    }, [stu.id]);

    if (student) { var date = new Date(student.updatedAt); }


    if (!student) return <h1>Loading...</h1>;

    return (
        <>
            <div className="profilemainbox">
                <div className='profilecard'>
                    <h1>Image Detail </h1>
                    <div className="imagesection">
                        <img className='aimage' src={`http://localhost:5000/${student.profilePhoto}`} alt={student.name} />
                    </div>
                    <div className='name'>{student.name}</div>
                    <div className='discription'>Discription: {student.discription}</div>
                    {/* <p>Uploaded At: {student.updatedAt}</p> */}
                    {student && <div className='date'>Uploaded By: {student ? date.toLocaleDateString('en-GB') : 'N/A'} {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</div>}
                    {/* {student && <p>Uploaded By: {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</p>} */}
                </div>
            </div>
        </>
    );
};

export default StudentProfile;
