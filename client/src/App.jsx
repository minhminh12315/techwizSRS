import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Register, Header } from './index.js'
import Home from './Pages/User/Home.jsx';

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
                <Route path='/Header' element={<Header />} />
                <Route path='/bg1' element={<Header />} />
            </Routes>
        </>
    );
}

export default App;
