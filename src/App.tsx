import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './pages/Calendar';
import { type DiaryData, diaryTempData } from './components/datas/calendarData';
import { createContext } from 'react';

const data = diaryTempData;

export const DiaryStateContext = createContext<DiaryData[]>([]);

function App() {
    return (
        <>
            <DiaryStateContext.Provider value={data}>
                <Routes>
                    <Route path="/" element={<Calendar />} />
                </Routes>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App;
