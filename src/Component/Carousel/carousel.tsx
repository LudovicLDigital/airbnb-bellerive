import React, {useState} from "react";
import "./carousel.css";
import PhotoSwiper from "./PhotosSwiper/photoSwiper";
import Modal from "../Modal/modal";
import {LCDPicture} from "../../ObjectTypes/LCDPicture";

interface Props {
    classNameContainer?: string
}
function Carousel({classNameContainer}: Props): JSX.Element {
    const [showModal, setModalVisible] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState<LCDPicture | null>(null);
    function showPhoto(datas: LCDPicture) {
        console.log(`<=====> ${new Date().getHours()}:${new Date().getMinutes()} ${new Date().getDate()}/${new Date().getMonth()} <=====>`);
        console.log(`===> datas have the value :`);
        console.log(datas)
        setSelectedPhoto(datas);
        setModalVisible(true)
    }
    return (
        <>
            {showModal && selectedPhoto &&
                <Modal handleClose={() => setModalVisible(false)}>
                    <div className={"flex flex-1"}>
                        <img src={`${process.env.PUBLIC_URL}/${selectedPhoto.path}`}
                             alt={selectedPhoto.title}/>
                    </div>
                </Modal>
            }
            <div className={`carousel-container border-4 flex self-center p20 shadow-xl ${classNameContainer? classNameContainer : ''}`}>
                <div id={"corner-tl"} className={"corner border-4 shadow-lg"}/>
                <div id={"corner-tr"} className={"corner border-4 shadow-lg"}/>
                <div id={"corner-bl"} className={"corner border-4 shadow-lg"}/>
                <div id={"corner-br"} className={"corner border-4 shadow-lg"}/>
                <div className={"flex flex-1 p-2"}>
                    <PhotoSwiper showAModal={(datas) => showPhoto(datas)}/>
                </div>
            </div>
        </>
    );
}

export default Carousel;
