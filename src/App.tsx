import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './pages/Calendar';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Calendar />} />
            </Routes>
        </>
    );
}

export default App;
