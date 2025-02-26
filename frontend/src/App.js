import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
import UploadForm from './components/UploadForm';
import ImageList from './components/ImageList';
import Singleimage from './components/Singleimage';
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
                <Routes>
                    <Route path="/" element={<ImageList/>} />
                    <Route path="/image/add" element={<UploadForm/>} />
                    <Route path="/image/:id" element={<Singleimage/>} />
                </Routes>
            </>
        </Router>
    );
};

export default App;