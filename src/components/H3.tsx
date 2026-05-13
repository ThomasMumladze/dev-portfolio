// ========== props interface ========== //
interface Props {
    title: string;
}
const H3 = (props: Props) => {
    const { title } = props;

    return (
        <div className="sub-title">
            <h3>{title}</h3>
        </div>
    );
};

export default H3;
