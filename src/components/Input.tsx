// ========== component import ========== //
import H3 from "./H3";

// ========== props interface ========== //
interface Props {
    type: string;
    placeholder: string;
    label: string;
    onChange: (e: any) => void;
}

const Input = (props: Props) => {
    const { label, placeholder, type, onChange } = props;
    return (
        <div className="input">
            <div>
                <H3 title={label} />
            </div>
            <input onChange={(e: any) => onChange(e.target.value)} type={type} placeholder={placeholder} />
        </div>
    );
};

export default Input;
