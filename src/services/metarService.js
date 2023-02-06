export default class MetarService {
    API_BASE = "https://api.checkwx.com/metar/";
    API_KEY = "728f5e0d73bc4102bf10966d84";

    // `https://api.checkwx.com/metar/${icao}/decoded?x-api-key=728f5e0d73bc4102bf10966d84`

    getData = async (icao) => {
        const URL = `${this.API_BASE}${icao}/decoded?x-api-key=${this.API_KEY}`;
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error(`Could not fetch ${URL}, received ${res.status}`);
        }
        const json = await res.json();
        return await json;
    };

    getItems = async (icao) => {
        const res = await this.getData(icao);
        const data = res.data[0];

        const metar = data.raw_text;
        const airportName = data.station?.name;
        const location = data.station?.location;
        const infoTime = data.observed;
        const temp = data.temperature?.celsius;
        const dewPoint = data.dewpoint?.celsius;
        const windDirection = data.wind?.degrees;
        const windSpeedMps = data.wind?.speed_mps;
        const windSpeedKts = data.wind?.speed_kts;
        const barometerHPa = data.barometer?.hpa;
        const barometerHg = data.barometer?.hg;

        return {
            metar,
            airportName: this._airportNameModified(airportName),
            location: this._locationModified(location),
            infoTime: this._infoTimeModified(infoTime),
            temp: this._tempModified(temp, "Air Temperature"),
            dewPoint: this._tempModified(dewPoint, "Dew Point"),
            windData: this._windDataModified(
                windDirection,
                windSpeedMps,
                windSpeedKts
            ),
            barometerData: this._barometerDataModified(
                barometerHPa,
                barometerHg
            ),
        };
    };

    _infoTimeModified = (data) => {
        if (!data) {
            return "Information from: ____";
        }

        const regExpDate = /\d{4}-\d\d-\d\d/;
        const regExpTime = /\d\d:\d\d/;

        const date = data.match(regExpDate)[0].split("-").reverse().join(".");
        const time = data.match(regExpTime)[0];

        const stringInfoTime = `Information from: ${date}, ${time} UTC`;
        return stringInfoTime;
    };

    _airportNameModified = (data) => {
        if (!data) {
            return "Airport: ____";
        }

        const stringAirportName = `Airport: ${data}`;

        return stringAirportName;
    };

    _locationModified = (data) => {
        if (!data) {
            return "City: ____";
        }

        const city = data.replace(/,\s\w+/g, "");

        const stringLocation = `City: ${city}`;

        return stringLocation;
    };

    _tempModified = (data, text) => {
        if (!data && data !== 0) {
            return `${text}: ____`;
        }
        if (data === 0) {
            return `${text}: ${data}`;
        }
        if (!data.toString().startsWith("-")) {
            return `${text}: +${data}`;
        }

        return `${text}: ${data}`;
    };

    _windDataModified = (direction, mps, kt) => {
        if (!direction && !(mps || kt)) {
            return "Wind: Calm";
        }

        if (!direction && (mps || kt).toString() !== "00") {
            return `Wind variable, ${mps} mps (${kt} kt) `;
        }

        const stringWindData = `Wind: ${direction} degrees, ${mps} mps (${kt} kt)`;

        return stringWindData;
    };

    _barometerDataModified = (hPa, hg) => {
        if (!hPa && !hg) {
            return "QNH: ____";
        }

        const stringBarometerData = `QNH: ${hPa} hPa (${hg} inHg)`;
        return stringBarometerData;
    };
}
