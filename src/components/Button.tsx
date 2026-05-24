// ========== props interface ========== //
interface Props {
    title: string;
    clickFunction?: () => void;
}

const Button = (props: Props) => {
    const { clickFunction, title } = props;
    return (
        <button onClick={clickFunction} className="btn-primary">
            {title}
        </button>
    );
};

export default Button;
