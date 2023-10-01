import React, {useCallback, useEffect, useState} from "react";
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
    const [isAvailable, setIsAvailable] = useState<boolean>(false);
    const [icalData, setIcalData] = useState<any>(null);

    async function fetchIcalData() {
        try {

            const response = await fetch('https://www.airbnb.fr/calendar/ical/52253579.ics?s=86ab8a3faa96c2db7dfc31b919704fde', {
                mode: 'no-cors',
            });
            const text = await response.text();

            const events = text.split('BEGIN:VEVENT').slice(1).map(e => 'BEGIN:VEVENT' + e);
            setIcalData(events);
        } catch (error) {
            console.error('Error fetching or parsing iCal data:', error);
            return null;
        }
    }
    useEffect(() => {
        fetchIcalData();
    }, []);

    const checkForValidity = useCallback((startDate: Date, endDate: Date) => {
        if (!icalData) {
            return;
        }
        for (let k in icalData) {
            if (icalData.hasOwnProperty(k)) {
                const ev = icalData[k];
                if (icalData[k].type === 'VEVENT') {
                    if (
                        (ev.start.getMonth() === startDate.getMonth() && ev.start.getDate() === startDate.getDate() && ev.start.getFullYear() === startDate.getFullYear()) ||
                        (ev.end.getMonth() === endDate.getMonth() && ev.end.getDate() === endDate.getDate() && ev.end.getFullYear() === endDate.getFullYear())) {
                        setIsAvailable(false);
                        return;
                    } else {
                        setIsAvailable(true);
                    }
                }
            }
        }
    }, [icalData]);

    const onDateRangeSelected = useCallback((value: Date | [Date | null, Date | null]): void => {
        onChange(value);
        const dates: Date[] | null = value ? value as Date[] : null;
        if (dates) {
            const startDate = new Date(dates[0]);
            const endDate = new Date(dates[1]);
            setStringRange(`Du ${dateToFRString(startDate)} au ${dateToFRString(endDate)}`);

            const countDay = (endDate.getTime() - startDate.getTime()) / (86400 * 1000);
            const price = (countDay * 80).toFixed(0);
            setPriceString(`Prix du séjour (${countDay.toFixed(0)} jours) = ${price} €`)

            checkForValidity(startDate, endDate);
        }
    }, [checkForValidity]);

    function bookDirectly() {
        alert(`Cette fonctionnalité n'est pas encore disponible.\nPour réserver ${stringRange}, utilisez une des plateformes de réservation !`)
    }

    return (
        <div className={'flex flex-col ' + classNameContainer}>
            <span className={'text-xl font-bold'}>Réserver directement ici ! (bientôt)</span>
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
                    {isAvailable ? (<span >🟢 Est disponible</span>) : (<span>🔴 N'est pas disponible</span>)}
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
