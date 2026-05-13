// ========== component import ========== //
import H3 from "./H3";

// ========== props interface ========== //
interface Props {
    type: string;
    placeholder: string;
    label: string;
}

const Input = (props: Props) => {
    const { label, placeholder, type } = props;
    return (
        <div className="input">
            <div>
                <H3 title={label} />
            </div>
            <input type={type} placeholder={placeholder} />
        </div>
    );
};

export default Input;
