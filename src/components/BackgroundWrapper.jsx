import { useEffect } from "react";
import { useState } from "react";
import styles from "./BackgroundWrapper.module.css";

const {
    winter1,
    winter2,
    winter3,
    winter4,
    spring1,
    spring2,
    spring3,
    spring4,
    summer1,
    summer2,
    summer3,
    summer4,
    autumn1,
    autumn2,
    autumn3,
    autumn4,
} = styles;

const winter = [winter1, winter2, winter3, winter4];
const spring = [spring1, spring2, spring3, spring4];
const summer = [summer1, summer2, summer3, summer4];
const autumn = [autumn1, autumn2, autumn3, autumn4];

const months = new Date().getMonth();

let season;
if (months === (11 || 0 || 1)) season = winter;
if (months === (2 || 3 || 4)) season = spring;
if (months === (5 || 6 || 7)) season = summer;
if (months === (8 || 9 || 10)) season = autumn;

console.dir(season[0]);

const BackgroundWrapper = (props) => {
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        setTimeout(
            () =>
                imgIndex === season.length - 1
                    ? setImgIndex(0)
                    : setImgIndex((prev) => prev + 1),
            10000
        );
    });

    return <div className={season[imgIndex]}>{props.children}</div>;
};

export default BackgroundWrapper;
