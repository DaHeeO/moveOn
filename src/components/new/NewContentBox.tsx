import AlignJustified from '../../assets/AlignJustified';
import './NewContentBox.css';

interface Props {
    content: string;
    setContent: (value: string) => void;
}

const NewContentBox = ({ content, setContent }: Props) => {
    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    return (
        <div className="NewContentBox">
            <p className="sub-text">하루 메모(선택)</p>
            <div className="contenBoxWrapper">
                <AlignJustified />
                <textarea
                    value={content}
                    onChange={onChangeContent}
                    className="contentBox"
                    placeholder="내용 입력(최대 300자)"
                    maxLength={300}
                ></textarea>
            </div>
        </div>
    );
};

export default NewContentBox;
