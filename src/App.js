import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/css/App.css';
import Main from '../src/pages/main.js';

function App() {
return (
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>} />
            </Routes>
        </div>
    </BrowserRouter>
);
}

export default App;
