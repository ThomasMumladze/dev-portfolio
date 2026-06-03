// ========== props interface ========== //
interface Props {
    type: string;
    placeholder: string;
    label: string;
    onChangeFunc: (e: any) => void;
    value?: string | any;
    isRequired?: boolean;
    ErrorMessage?: string;
}

const Input = (props: Props) => {
    const { label, placeholder, type, onChangeFunc, value, isRequired, ErrorMessage } = props;
    return (
        <div className="input">
            <div>
                <label>{label}</label>
                <p className="error-message">{ErrorMessage}</p>
            </div>
            <input
                required={isRequired}
                value={value}
                onChange={(e: any) => onChangeFunc(e.target.value)}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
