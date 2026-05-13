// ========== props interface ========== //
interface Props {
    title: string;
    onCLick?: () => void;
}

const Button = (props: Props) => {
    const { onCLick, title } = props;
    return (
        <button onClick={() => onCLick} className="btn-primary">
            {title}
        </button>
    );
};

export default Button;
