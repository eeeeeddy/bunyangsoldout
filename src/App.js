import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/css/App.css';
import Test from './test/test.js';
import Main from './pages/main.js';
import RegistForm from './pages/registForm.js';
import RegistSuccess from './pages/registSuccess.js';

function App() {
return (
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/regist" element={<RegistForm/>} />
                <Route path="/registSuccess" element={<RegistSuccess/>} />
                <Route path="/test" element={<Test/>} />
            </Routes>
        </div>
    </BrowserRouter>
);
}

export default App;
