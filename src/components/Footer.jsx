import FooterItem from "./FooterItem";
import styles from "./Footer.module.css";

const leftCol = (
    <div className={styles.vk}>
        <FooterItem
            title="Author's page:"
            href="https://vk.com/souldrum"
            alt="vk"
            srcImg="https://img.icons8.com/3d-fluency/100/000000/vk-circled.png"
        />
    </div>
);

const rightCol = (
    <div className={styles.github}>
        <FooterItem
            title="&copy; Alexandr Dushenko (souldrum):"
            href="https://github.com/souldrum"
            alt="github"
            srcImg="https://img.icons8.com/color/48/000000/github--v1.png"
        />
        <FooterItem
            title="Manual on github:"
            href="https://github.com/souldrum/Metar_And_Weather#readme"
            alt="github"
            srcImg="https://img.icons8.com/color/48/000000/github--v1.png"
        />
    </div>
);

const Footer = () => {
    return (
        <div className={styles.footer}>
            {leftCol}
            {rightCol}
        </div>
    );
};

//https://icons8.com/icon/1G2vmDZQoCiR/calculator

//https://souldrum.github.io/QnhToQfe_React/

export default Footer;
