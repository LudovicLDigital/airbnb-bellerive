import React, {useState} from "react";
import './calendar.css'
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import { dateToFRString } from "../../Helper/stringHelper";


function LDCalendar(props) {

    const [value, onChange] = useState(new Date());
    const [stringRange, setStringRange] = useState('Aucune date choisie');
    const [priceString, setPriceString] = useState(null);

    function onDateRangeSelected(value) {
        onChange(value);
        const startDate = new Date(value[0]);
        const endDate = new Date(value[1]);
        setStringRange(`Du ${dateToFRString(startDate)} au ${dateToFRString(endDate)}`);

        const countDay = (endDate.getTime() - startDate.getTime()) / (86400 * 1000);
        const price = (countDay * 80).toFixed(0);
        setPriceString(`Prix du séjour (${countDay.toFixed(0)} jours) = ${price} €`)

    }

    function bookDirectly() {
        alert(`Séjour réservé ${stringRange}`)
    }

    return (
        <div className={'flex flex-col ' + props.className}>
            <span className={'text-xl font-bold'}>Réserver directement ici !</span>
            <div className={'flex'}>
                <div className={'basis-6/7 mr-2'}>
                    <Calendar
                        selectRange={true}
                        returnValue={"range"}
                        onChange={onDateRangeSelected}
                        value={value}/>
                </div>
                <div className={'basis-1/7 font-bold'}>
                    <span>Votre réservation</span>
                    <br/>
                    <span>{stringRange}</span>
                    <br/>
                    <span >🟢 Est disponible</span>
                    <br/>
                    <span>{priceString}</span>
                    <br/>
                    {priceString &&
                        <button onClick={bookDirectly} className={'booking-btn p-3 mt-9'}>Réserver </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default LDCalendar;
