import InputIcao from "./components/InputIcao";
import ClearButton from "./components/ClearButton";
import InfoBlock from "./components/InfoBlock";
import MetarProvider from "./context/metarContext";
import "./App.css";
import BackgroundWrapper from "./components/BackgroundWrapper";
import Footer from "./components/Footer";

const renderTooltip = (text, hrefText, href) => (
    <>
        {text}
        <a href={href} target="blank">
            {hrefText}
        </a>
    </>
);

function App() {
    return (
        <BackgroundWrapper>
            <MetarProvider>
                <InputIcao tooltip={renderTooltip} />
                <ClearButton />
                <InfoBlock />
                <Footer />
            </MetarProvider>
        </BackgroundWrapper>
    );
}

export default App;
