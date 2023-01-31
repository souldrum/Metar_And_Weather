import { createContext, useReducer } from "react";
import MetarService from "../services/metarService";

export const MetarContext = createContext();
const { getItems } = new MetarService();

const initialState = {
    icao: "",
    metar: "",
    transformData: {},
    isLoading: false,
    errorData: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ICAO":
            return { ...state, icao: action.payload };
        case "SET_METAR":
            return { ...state, metar: action.payload };
        case "SET_DATA":
            return { ...state, transformData: action.payload };
        case "LOADING":
            return { ...state, isLoading: action.payload };
        case "ERROR":
            return { ...state, errorData: action.payload };
        case "RESET":
            return initialState;
        default:
            return state;
    }
};

const MetarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setIcao = (icao) => dispatch({ type: "SET_ICAO", payload: icao });
    const setMetar = (metar) => dispatch({ type: "SET_METAR", payload: metar });
    const setTransformData = (transformData) =>
        dispatch({ type: "SET_DATA", payload: transformData });
    const setIsLoading = (loading) =>
        dispatch({ type: "LOADING", payload: loading });
    const resetData = () => dispatch({ type: "RESET" });
    const setErrorData = (error) => dispatch({ type: "ERROR", payload: error });

    const loadMetar = () => {
        setIsLoading(true);
        getItems(state.icao)
            .then(({ metar, ...otherData }) => {
                setMetar(metar);
                setTransformData(otherData);
                setErrorData("");
            })
            .catch((e) => {
                setErrorData(e.message);
                setMetar("");
                setTransformData({});
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <MetarContext.Provider
            value={{
                ...state,
                setIcao,
                setMetar,
                setTransformData,
                resetData,
                loadMetar,
            }}
        >
            {children}
        </MetarContext.Provider>
    );
};

export default MetarProvider;
