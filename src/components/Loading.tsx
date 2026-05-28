interface Props {
    loadingStart: number | null;
}
const Loading = (props: Props) => {
    const { loadingStart } = props;

    return <div className={`loader`} style={{ animation: `l3 ${loadingStart}ms infinite` }}></div>;
};

export default Loading;
