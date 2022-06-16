import React from "react";
import './plateform-backlinks.css';

interface Props {
    /** Addable class to the main container of the backlinks */
    className: string
}
function PlateformBacklinks({ className }: Props): JSX.Element {

    function clickOnAPlateform(id: number) {
        if (id === 0) {
            window.open("https://www.airbnb.fr/s/Bellerive~sur~Allier/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&query=Bellerive-sur-Allier&place_id=ChIJV_H4goLN9kcREMrry688CQQ&date_picker_type=calendar&source=structured_search_input_header&search_type=autocomplete_click")
        } else {
            window.open("https://www.booking.com/searchresults.fr.html?label=gen173nr-1FCAEoggI46AdIM1gEaE2IAQGYAQ24AQfIAQ3YAQHoAQH4AQuIAgGoAgO4At257pQGwAIB0gIkOGIyZTNkMTQtOTEzYi00Yzg0LWE3NjMtZTZkZDdiM2JhY2Fm2AIG4AIB&sid=bbabd97b1432d444fdeb53a67ce400d8&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.fr.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaE2IAQGYAQ24AQfIAQ3YAQHoAQH4AQuIAgGoAgO4At257pQGwAIB0gIkOGIyZTNkMTQtOTEzYi00Yzg0LWE3NjMtZTZkZDdiM2JhY2Fm2AIG4AIB%26sid%3Dbbabd97b1432d444fdeb53a67ce400d8%26sb_price_type%3Dtotal%26%26&ss=Bellerive-sur-Allier%2C+Auvergne%2C+France&is_ski_area=&ssne=Vichy&ssne_untouched=Vichy&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=bellerive-&ac_position=3&ac_langcode=fr&ac_click_type=b&dest_id=-1411654&dest_type=city&place_id_lat=46.11562&place_id_lon=3.4064&search_pageview_id=67c47e2e857a03cf&search_selected=true&search_pageview_id=67c47e2e857a03cf&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0")
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
