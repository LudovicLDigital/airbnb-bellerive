import React from "react";
import './homePage.css';
import Carousel from "../../Component/Carousel/carousel";
import LDCalendar from "../../Component/Calendar/calendar";
import PlateformBacklinks from "../../Component/PlateformBackLinks/plateform-backlinks";

function HomePage(): JSX.Element {

    return (
        <div className={'flex flex-col'}>
            <div className={'flex sm:flex-col lg:flex-row items-center'}>
                <p className={'basis-2/5 p-3 lg:order-first sm:order-last'} >
                    <span className={'font-bold'}> Besoin de voyager sans contraintes de transport ? La Belle Rive est le logement parfait pour vous !</span>
                    <br/>
                    Nous avons recrée un univers unique pour vous faire sortir des logements habituels, esprit tropical, espace chaleureux et ceci dans un confort optimal.
                    Vous pourrez aussi vous détendre aux alentours, les communes de Bellerive-sur-Allier et Vichy ont aménagé pour vous les rives de l'allier pour profiter de séance
                    de détente ou sportive, vous trouverez même des petites plages !
                </p>
                <Carousel classNameContainer={"basis-3/5 sm:order-first lg:order-last"}/>
            </div>
            <div className={'flex sm:flex-col lg:flex-row justify-around'}>
                <LDCalendar classNameContainer={"basis-4/6 m-5"} />
                <PlateformBacklinks className={"basis-2/6 m-5"} />
            </div>
        </div>
    )
}

export default HomePage;
