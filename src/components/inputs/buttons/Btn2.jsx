import { useNavigate } from "react-router-dom";

export const Btn2 = ({title, onClick}) => {
    return (
        <button className="btn2" onClick={onClick}>
            {title}
        </button>
    )
}
