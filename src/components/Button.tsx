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
            <p>hello world</p>
        </button>
    );
};

export default Button;
