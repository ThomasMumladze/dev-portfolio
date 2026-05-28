interface Props {
    loadingStart: number | null;
}
const Loading = (props: Props) => {
    const { loadingStart } = props;
    console.log(loadingStart, "child");

    return <div className={`loader`} style={{ animation: `l3 ${loadingStart}ms infinite` }}></div>;
};

export default Loading;
