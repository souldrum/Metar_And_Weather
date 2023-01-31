import useApp from "../hooks/useApp";

import styles from "./InputIcao.module.css";

const InputIcao = ({ tooltip }) => {
    const { icao, setIcao, loadMetar } = useApp();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        loadMetar();
    };

    const handleChange = (e) => setIcao(e.target.value.toUpperCase());

    return (
        <div className={styles.metarFormContainer}>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="icao">
                    Enter ICAO airport code:
                    <div className={styles.inputWrapper}>
                        <input
                            id="icao"
                            type="text"
                            maxLength={4}
                            value={icao}
                            onChange={handleChange}
                        />
                        <div className={styles.tooltip}>
                            <i className="bi bi-database-exclamation">
                                <span className={styles.tooltipText}>
                                    {tooltip(
                                        "icao code you can find",
                                        " here",
                                        "https://airportsbase.org/ICAO.php"
                                    )}
                                </span>
                            </i>
                        </div>
                    </div>
                </label>
            </form>
        </div>
    );
};

export default InputIcao;
