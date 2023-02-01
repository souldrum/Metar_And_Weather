import { useEffect } from "react";
import { useState } from "react";
import styles from "./BackgroundWrapper.module.css";

const { winter1, winter2, winter3, winter4 } = styles;
const winterArr = [winter1, winter2, winter3, winter4];

const BackgroundWrapper = (props) => {
    const [winter, setWinter] = useState(0);

    useEffect(() => {
        let image = new Image();
        image.src = winterArr[winter];

        setTimeout(
            () =>
                winter === winterArr.length - 1
                    ? setWinter(0)
                    : setWinter((prev) => prev + 1),
            10000
        );
    }, [winter]);

    return <div className={winterArr[winter]}>{props.children}</div>;
};

export default BackgroundWrapper;
