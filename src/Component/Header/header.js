import React , {useState} from 'react';
import './header.css'
import { FaInstagram } from 'react-icons/fa';


// =================================================================================

function Header(props) {

    function onInstagramClick () {
        window.open("https://www.instagram.com/_bloodey_/")
    }
    // ----
    return (
        <div className="app-header flex flex-row items-center justify-between">
            <div className="flex items-center">
                <img src={`${process.env.PUBLIC_URL}/Assets/logo.png`} className="logo p-2" alt="logo" />
                <div className="font-bold main-txt" >
                    La Belle Rive - Voyager au coeur de l'Allier !
                </div>
            </div>
            <div className={'flex flex-col items-center font-bold text-xs instagram-container'}
                 onClick={onInstagramClick}>
                <span>Suivez nous</span>
                <FaInstagram id="instagram" size={40} />
                <span>@LaBelleRiveBNB</span>
            </div>
        </div>
    )
}


// =================================================================================

export default Header;
