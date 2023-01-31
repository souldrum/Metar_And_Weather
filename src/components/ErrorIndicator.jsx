import ErrorIcao from "./ErrorIcao";
import Error404 from "./Error404";

const ErrorIndicator = ({ errorData }) => {
    if (errorData.includes("raw_text")) {
        return <ErrorIcao />;
    }

    return <Error404 errorData={errorData} />;
};

export default ErrorIndicator;
