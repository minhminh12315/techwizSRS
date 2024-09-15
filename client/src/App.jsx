import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Register } from './index.js'

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Có lỗi xảy ra:', error));
    }, []);

    return (
        <div>
            {/* <h1>API Data:</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )} */}
            <Routes>
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />}/>
            </Routes>
        </div>
    );
}

export default App;
