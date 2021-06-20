import React from "react";

export default function FormattedDate(props){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[props.date.getDay()];
    let hoursUnformatted = props.date.getHours();
    let hours = props.date.getHours()%12;
    let minutes = props.date.getMinutes();
    let amOrPm = ""

    if (minutes<10){
        minutes = `0${minutes}`
    };

    if (hoursUnformatted>11){
        amOrPm = "pm"
    } else {
        amOrPm="am"
    };

    return (
        <div>
            {day} {hours}:{minutes} {amOrPm}
        </div>
    )
}