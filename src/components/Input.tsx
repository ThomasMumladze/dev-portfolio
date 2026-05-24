// ========== component import ========== //
import H3 from "./H3";

// ========== props interface ========== //
interface Props {
    type: string;
    placeholder: string;
    label: string;
    onChange: (e: any) => void;
    value?: string;
    isRequired?: boolean;
    ErrorMessage?: string;
}

const Input = (props: Props) => {
    const { label, placeholder, type, onChange, value, isRequired, ErrorMessage } = props;
    return (
        <div className="input">
            <div>
                <H3 title={label} />
                <p className="error-message">{ErrorMessage}</p>
            </div>
            <input
                required={isRequired}
                value={value}
                onChange={(e: any) => onChange(e)}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
