import './NewHeader.css';
import ChevronLeft from '../../assets/ChevronLeft';

interface Props {
    title: React.ReactNode;
    description?: React.ReactNode;
    navigateBack: () => void;
}

const NewHeader = ({ navigateBack, title, description }: Props) => {
    return (
        <div className="NewHeader">
            <div className="header-wrapper" onClick={navigateBack}>
                <ChevronLeft />
            </div>
            <p className="description">{title}</p>
            <p className="sub-text">{description}</p>
        </div>
    );
};

export default NewHeader;
