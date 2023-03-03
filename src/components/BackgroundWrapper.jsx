import { useEffect } from "react";
import { useState } from "react";
import styles from "./BackgroundWrapper.module.css";

const { winter1, winter2, winter3, winter4 } = styles;

const winterArr = [winter1, winter2, winter3, winter4];

const BackgroundWrapper = (props) => {
    const [winter, setWinter] = useState(0);

    useEffect(() => {
        //preloading image
        winterArr.forEach((winterItem) => {
            const img = new Image();
            img.src = winterItem;
        });
    }, [winter]);

    useEffect(() => {
        setTimeout(
            () =>
                winter === winterArr.length - 1
                    ? setWinter(0)
                    : setWinter((prev) => prev + 1),
            10000
        );
    });

    return <div className={winterArr[winter]}>{props.children}</div>;
};

export default BackgroundWrapper;
