import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './../CSSFolder/studentslist.css'

const StudentList = () => {

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
        <div>
            <h2>Image List</h2>
            <ul className='stdentslist'>
                {students.map((student) => (
                    <>
                        <div className="image">
                            <Link to={`/image/${student._id}`}> 
                            <img src={`http://localhost:5000/${student.profilePhoto}`} width={"200px"} height={"250px"} alt={student.name} />
                                <div key={student._id}>
                                    {student.name}
                                </div>
                            </Link>
                        </div>
                    </>
                ))}
            </ul>
        </div>
    );
};
export default StudentList;
