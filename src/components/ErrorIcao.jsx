import styles from "./ErrorIndicator.module.css";
import oops from "../error_img/oops.png";

const ErrorIcao = () => {
    return (
        <div className={styles.errorIcao}>
            <img className={styles.oops} src={oops} alt="Oops!" />
            <h2>
                check that the{" "}
                <a href="https://airportsbase.org/ICAO.php" target="blank">
                    ICAO
                </a>{" "}
                code is entered correctly
            </h2>
        </div>
    );
};

export default ErrorIcao;
