import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './pages/calnedar/Calendar';
import { type DiaryData, type StickerSelection, DIARY_TEMP_DATA } from './constants/diary-constants';
import { createContext, useReducer, useRef } from 'react';
import NewSticker from './pages/calnedar/NewSticker';
import NewContent from './pages/calnedar/NewContent';
import EditSticker from './pages/calnedar/EditSticker';
import EditContent from './pages/calnedar/EditContent';
import { ToastContainer } from './components/common/ToastContainer';
import Home from './pages/Home';

const mockData = DIARY_TEMP_DATA;

interface DiaryDispatch {
    onCreate: (date: string, stickers: StickerSelection, content?: string, weight?: number) => void;
    onUpdate: (id: number, date: string, stickers: StickerSelection, content?: string, weight?: number) => void;
    onDelete: (id: number) => void;
}

type Action =
    | { type: 'CREATE'; data: DiaryData }
    | { type: 'UPDATE'; data: DiaryData }
    | { type: 'DELETE'; id: number };

function reducer(state: DiaryData[], action: Action): DiaryData[] {
    switch (action.type) {
        case 'CREATE':
            return [action.data, ...state];
        case 'UPDATE':
            return state.map((item) => (item.id === action.data.id ? action.data : item));
        case 'DELETE':
            return state.filter((item) => item.id !== action.id);
        default:
            return state;
    }
}

export const DiaryStateContext = createContext<DiaryData[] | undefined>(undefined);
export const DiaryDispatchContext = createContext<DiaryDispatch | undefined>(undefined);

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(DIARY_TEMP_DATA.length + 1);

    const onCreate = (date: string, stickers: StickerSelection, content?: string, weight?: number) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                date,
                stickers,
                content,
                weight,
            },
        });
    };

    const onUpdate = (id: number, date: string, stickers: StickerSelection, content?: string, weight?: number) => {
        dispatch({
            type: 'UPDATE',
            data: { id, date, stickers, content, weight },
        });
    };

    const onDelete = (id: number) => {
        dispatch({ type: 'DELETE', id });
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/diary/*"
                    element={
                        <DiaryStateContext.Provider value={data}>
                            <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
                                <Routes>
                                    <Route index element={<Calendar />} />
                                    <Route path="new1" element={<NewSticker />} />
                                    <Route path="new2" element={<NewContent />} />
                                    <Route path="edit1/:id" element={<EditSticker />} />
                                    <Route path="edit2/:id" element={<EditContent />} />
                                </Routes>
                            </DiaryDispatchContext.Provider>
                        </DiaryStateContext.Provider>
                    }
                />
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;

//  <DiaryStateContext.Provider value={data}>
//                 <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
//                     <Routes>
//                         {/* 1. 새로운 메인 홈 페이지 */}
//                         <Route path="/" element={<Home />} />

//                         {/* 2. 다이어리 관련 기능을 /diary 경로로 그룹화 */}
//                         <Route path="/diary">
//                             <Route index element={<Calendar />} /> {/* /diary 접속 시 달력 표시 */}
//                             <Route path="new1" element={<NewSticker />} />
//                             <Route path="new2" element={<NewContent />} />
//                             <Route path="edit1/:id" element={<EditSticker />} />
//                             <Route path="edit2/:id" element={<EditContent />} />
//                         </Route>
//                     </Routes>
//                 </DiaryDispatchContext.Provider>
//             </DiaryStateContext.Provider>
//             <ToastContainer />
