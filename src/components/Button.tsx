// ========== props interface ========== //
interface Props {
    children: any;
    clickFunction?: () => void;
}

const Button = (props: Props) => {
    const { clickFunction, children } = props;
    return (
        <button onClick={clickFunction} className="btn-primary">
            {children}
        </button>
    );
};

export default Button;
