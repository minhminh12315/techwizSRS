import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Register, Header } from './index.js'
import Home from './Pages/User/Home.jsx';
import './assets/css/minh.css';
import Appoiments from './Pages/User/Appoiments.jsx';
import Contact from './Pages/User/Contact.jsx';
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
            <Header />
            <Routes>
                <Route path='/Login' element={<Login />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/' element={<Home />} />
                <Route path='/appointment' element={<Appoiments />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
