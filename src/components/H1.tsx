// ========== props interface ========== //
interface Props {
    title: string;
}

const H1 = (props: Props) => {
    const { title } = props;
    return <h1 className="title">{title}</h1>;
};

export default H1;
