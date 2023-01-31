const FooterItem = ({ title, href, alt, srcImg }) => {
    return (
        <address>
            {title}
            <a href={href} target="blank">
                <img alt={alt} src={srcImg} width="30px" />
            </a>
        </address>
    );
};

export default FooterItem;
