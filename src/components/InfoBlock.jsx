import MetarField from "./MetarField";
import useApp from "../hooks/useApp";
import ErrorBoundry from "../hoc/ErrorBoundry";
import Spinner from "./Spinner";
import WithTransformMetar from "../hoc/WithTransformMetar";

const InfoBlock = () => {
    const { isLoading } = useApp();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <ErrorBoundry>
            <MetarField header={"METAR:"} />
            <WithTransformMetar />
        </ErrorBoundry>
    );
};

export default InfoBlock;
