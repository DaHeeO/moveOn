import { useNavigate } from 'react-router-dom';

const Home = () => {
    const nav = useNavigate();

    return (
        <div>
            <button
                onClick={() => {
                    nav('/diary');
                }}
            >
                캘린더
            </button>
        </div>
    );
};

export default Home;
