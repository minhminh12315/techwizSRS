import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Register } from './index.js'
import Home from './Pages/User/Home.jsx';
import './assets/css/minh.css';
import Appoiments from './Pages/User/Appoiments.jsx';
function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Có lỗi xảy ra:', error));
    }, []);

    return (
        <>
            <Routes>
                <Route path='/Login' element={<Login />} />
                <Route path='/Register' element={<Register />}/>
                <Route path='/' element={<Home />} />
                <Route path='/appointment' element={<Appoiments />} />
                
            </Routes>
        </>
    );
}

export default App;
