import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import StudentProfile from './components/StudentProfile';
import Navbar from './components/Navbar';

const App = () => {
    
    // const [students, setStudents] = useState([]);
    // const fetchStudents = async () => {
    //     const response = await axios.get('http://localhost:5000/api/students');
    //     setStudents(response.data);
    // };
    // useEffect(() => {
    //     fetchStudents();
    // }, []);

    return (
        <Router>
            <>
                <Navbar/>
                {/* <StudentList students={students} /> */}
                <Routes>
                    <Route path="/" element={<StudentList/>} />
                    <Route path="/image/add" element={<StudentForm/>} />
                    <Route path="/image/:id" element={<StudentProfile/>} />
                </Routes>
            </>
        </Router>
    );
};

export default App;