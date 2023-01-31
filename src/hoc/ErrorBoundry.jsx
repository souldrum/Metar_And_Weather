import ErrorIndicator from "../components/ErrorIndicator";
import useApp from "../hooks/useApp";

const ErrorBoundry = (props) => {
    const { errorData } = useApp();

    if (errorData) {
        return (
            <>
                <ErrorIndicator errorData={errorData} />
            </>
        );
    }
    return props.children;
};

export default ErrorBoundry;
