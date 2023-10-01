import React from "react";
import './plateform-backlinks.css';

interface Props {
    /** Addable class to the main container of the backlinks */
    className: string
}
function PlateformBacklinks({ className }: Props): JSX.Element {

    function clickOnAPlateform(id: number) {
        if (id === 0) {
            window.open("https://airbnb.com/h/labelleriveduvoyageur")
        } else {
            window.open("https://www.booking.com/hotel/fr/la-belle-rive-du-voyageur.fr.html?label=gen173nr-1FCAsoTUIZbGEtYmVsbGUtcml2ZS1kdS12b3lhZ2V1ckgNWARoTYgBAZgBDbgBGMgBDdgBAegBAfgBA4gCAagCBLgCqrnlqAbAAgHSAiRhNTk3NmQyYi00MjhkLTRmZjgtYWViYS0wODg2YzlmNTY3ODnYAgXgAgE&sid=0414a0db4b04dc81f293413d56e14de3&dist=0&keep_landing=1&sb_price_type=total&type=total&")
        }
    }

    return (
        <div className={'flex flex-col items-center justify-center ' + className}>
            <span className={'text-xl font-bold basis-1/3'}>Ou via une plateforme !</span>
            <img src={`${process.env.PUBLIC_URL}/Assets/Plateforms/airbnb.png`}
                 alt={'Réserver via Airbnb'}
                 className={"backlinks m-5 rounded-3xl"}
                 onClick={() => clickOnAPlateform(0)}
            />
            <img src={`${process.env.PUBLIC_URL}/Assets/Plateforms/booking.png`}
                 alt={'Réserver via Booking.com'}
                 className={"backlinks m-5"}
                 onClick={() => clickOnAPlateform(1)}
            />
        </div>
    )

}
export default PlateformBacklinks;
