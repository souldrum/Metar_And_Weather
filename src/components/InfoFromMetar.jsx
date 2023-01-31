import styles from "./InfoFromMetar.module.css";

const InfoFromMetar = ({ header, data }) => {
    return (
        <div className={styles.infoBlock}>
            <h3 className={styles.header}>{header}</h3>
            <ul>
                {data.map(({ id, text }) => (
                    <li key={id} className={styles.infoItem}>
                        {text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InfoFromMetar;
