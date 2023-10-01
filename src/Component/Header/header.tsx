import React , {useState} from 'react';
import './header.css'
import { FaInstagram } from 'react-icons/fa';


// =================================================================================

function Header(props: any): JSX.Element {

    function onInstagramClick (): void {
        window.open("https://www.instagram.com/labelleriveduvoyageur/")
    }
    // ----
    return (
        <div className="app-header flex flex-row items-center justify-between">
            <div className="flex items-center ml-10">
                <img src={`${process.env.PUBLIC_URL}/Assets/logo.png`} className="logo p-2" alt="logo" />
                <div className="font-bold main-txt" >
                    La Belle Rive du Voyageur
                </div>
            </div>
            <div className={'flex flex-col items-center font-bold text-xs instagram-container mr-10'}
                 onClick={onInstagramClick}>
                <span>Suivez nous</span>
                <FaInstagram id="instagram" size={40} />
                <span>@labelleriveduvoyageur</span>
            </div>
        </div>
    )
}


// =================================================================================

export default Header;
