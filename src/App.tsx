import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './pages/Calendar';
import { type DiaryData, DIARY_TEMP_DATA } from './constants/diary-constants';
import { createContext } from 'react';
import New from './pages/New';

const data = DIARY_TEMP_DATA;

export const DiaryStateContext = createContext<DiaryData[]>([]);

function App() {
    return (
        <>
            <DiaryStateContext.Provider value={data}>
                <Routes>
                    <Route path="/" element={<Calendar />} />
                    <Route path="/new" element={<New />} />
                </Routes>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App;
