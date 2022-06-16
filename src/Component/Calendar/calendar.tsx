import React, {useState} from "react";
import './calendar.css'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { dateToFRString } from "../../Helper/stringHelper";
interface Props {
    classNameContainer?: string
}
function LDCalendar({classNameContainer}: Props): JSX.Element {

    const [value, onChange] = useState<Date | [Date | null, Date | null] | null | undefined>(new Date());
    const [stringRange, setStringRange] = useState('Aucune date choisie');
    const [priceString, setPriceString] = useState<string>('');

    function onDateRangeSelected(value: Date | [Date | null, Date | null]): void {
        onChange(value);
        const dates: Date[] | null = value ? value as Date[] : null;
        if (dates) {
            const startDate = new Date(dates[0]);
            const endDate = new Date(dates[1]);
            setStringRange(`Du ${dateToFRString(startDate)} au ${dateToFRString(endDate)}`);

            const countDay = (endDate.getTime() - startDate.getTime()) / (86400 * 1000);
            const price = (countDay * 80).toFixed(0);
            setPriceString(`Prix du séjour (${countDay.toFixed(0)} jours) = ${price} €`)
        }
    }

    function bookDirectly() {
        alert(`Séjour réservé ${stringRange}`)
    }

    return (
        <div className={'flex flex-col ' + classNameContainer}>
            <span className={'text-xl font-bold'}>Réserver directement ici !</span>
            <div className={'flex'}>
                <div className={'basis-6/7 mr-2'}>
                    <Calendar
                        selectRange={true}
                        returnValue={"range"}
                        onChange={(value: Date | [Date | null, Date | null]) => onDateRangeSelected(value)}
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
