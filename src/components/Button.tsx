// ========== props interface ========== //
interface Props {
    children: any;
    clickFunction?: () => void;
    btnClassName?: string;
}

const Button = (props: Props) => {
    const { clickFunction, children, btnClassName } = props;
    return (
        <button onClick={clickFunction} className={`btn-primary ${btnClassName || ""}`}>
            {children}
        </button>
    );
};

export default Button;
