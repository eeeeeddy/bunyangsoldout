import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/css/App.css';
import Main from './pages/main.js';

function App() {
return (
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>} />
                {/* <Route path="/regist" element={<RegistForm/>} /> */}
            </Routes>
        </div>
    </BrowserRouter>
);
}

export default App;
