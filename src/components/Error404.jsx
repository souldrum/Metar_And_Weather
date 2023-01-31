import styles from "./ErrorIndicator.module.css";
import fail from "../error_img/fail.png";

const Error404 = ({ errorData }) => {
    return (
        <div className={styles.error404}>
            <img className={styles.fail} src={fail} alt="fail" />
            <h2>{errorData}. </h2>
        </div>
    );
};

export default Error404;
