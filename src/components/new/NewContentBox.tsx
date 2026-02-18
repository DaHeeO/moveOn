import AlignJustified from '../../assets/AlignJustified';
import './NewContentBox.css';

const NewContentBox = () => {
    return (
        <div className="NewContentBox">
            <p className="sub-text">하루 메모(선택)</p>
            <div className="contenBoxWrapper">
                <AlignJustified />
                <textarea name="" id="" className="contentBox" placeholder="내용 입력(최대 300자)"></textarea>
            </div>
        </div>
    );
};

export default NewContentBox;
