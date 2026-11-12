import React, { useState } from "react";
import DistanceInput from "./DistanceInput";
import "./DistanceConverter.css";

const KM_TO_MILE = 0.621371;

function toMile(km) {
    return km * KM_TO_MILE;
}

function toKm(mile) {
    return mile / KM_TO_MILE;
}

function tryConvert(distance, convert) {
    const input = parseFloat(distance);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function DistanceConverter(props) {
    const [distance, setDistance] = useState("");
    const [unit, setUnit] = useState("km");

    const handleKmChange = (distance) => {
        setDistance(distance);
        setUnit("km");
    };

    const handleMileChange = (distance) => {
        setDistance(distance);
        setUnit("mile");
    };

    const km = unit === "mile" ? tryConvert(distance, toKm) : distance;
    const mile = unit === "km" ? tryConvert(distance, toMile) : distance;

    return (
        <div className="distance-converter">
            <h2>거리변환기</h2>
            <DistanceInput
                unit="km"
                distance={km}
                onDistanceChange={handleKmChange}
            />
            <DistanceInput
                unit="mile"
                distance={mile}
                onDistanceChange={handleMileChange}
            />
        </div>
    );
}

export default DistanceConverter;
