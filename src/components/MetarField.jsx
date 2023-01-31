import useApp from "../hooks/useApp";
import styles from "./MetarField.module.css";

const MetarField = ({ header }) => {
    const { metar } = useApp();

    if (!metar) {
        return null;
    }

    return (
        <div className={styles.dataField}>
            <h3 className={styles.header}>{header}</h3>
            <p>{metar}</p>
        </div>
    );
};

export default MetarField;
