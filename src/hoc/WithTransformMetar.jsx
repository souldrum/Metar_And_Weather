import InfoFromMetar from "../components/InfoFromMetar";
import useApp from "../hooks/useApp";

const WithTransformMetar = () => {
    const { transformData, metar } = useApp();

    const metarDataBase = Object.keys(transformData).map((key) => {
        return {
            id: key,
            text: transformData[key],
        };
    });

    if (!metar) {
        return null;
    }

    return (
        <InfoFromMetar
            header={"Decryption of some METAR data:"}
            data={metarDataBase}
        />
    );
};

export default WithTransformMetar;
