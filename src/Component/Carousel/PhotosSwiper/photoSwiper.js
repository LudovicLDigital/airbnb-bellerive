import React, {useState, useEffect} from "react";
import {getImageArray} from "../../../Helper/ImageArray";
import './photoSwiper.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Modal from "../../Modal/modal";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const INITIAL_STATE = {
    photos: [{title: "Séjour", path: "Assets/logo.png"}],
    selectedPhoto: null,
    showModal: false,
    currentSlide: 0
}
function PhotoSwiper({showAModal, ...props}) {
    const [photos, setPhotos] = useState(INITIAL_STATE.photos);
    const [showModal, setModalVisible] = useState(INITIAL_STATE.showModal);
    const [selectedPhoto, setSelectedPhoto] = useState(INITIAL_STATE.selectedPhoto);
    const [currentSlide, setCurrentSlide] = useState(INITIAL_STATE.currentSlide);

    useEffect(() => {
        setPhotos(getImageArray());
    }, []);

    function showFullScreen(item, index) {
        const datas = photos[index];
        showAModal(datas);
    }
    function changeSlide(value) {
        setCurrentSlide(currentSlide + value)
    }

    function updateCurrentSlide(index) {

        if (currentSlide !== index) {
            setCurrentSlide(index)
        }
    }

    if (photos && photos.length > 0) {
        return (

                <div className={"flex flex-1 justify-between items-center p-2"}>
                    <FaChevronLeft
                        onClick={() => changeSlide(-1)}
                        size={'5rem'}
                        className={"m-4"}
                    />
                    <Carousel
                        showArrows={false}
                        autoPlay={true}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        centerMode={true}
                        interval={6000}
                        className={"border-x-2"}
                        onClickItem={((index, item) => showFullScreen(item, index))}
                        selectedItem={currentSlide}
                        onChange={updateCurrentSlide}
                    >
                        {photos && photos.map((value) => {
                                return (
                                    <div className={"image-container border-2 m-0.5"} key={`${value.id}`}>
                                        <p className={"absolute img-legend p-2 font-bold"}>{value.title}</p>
                                        <img src={`${process.env.PUBLIC_URL}/${value.path}`}
                                             alt={value.title}/>
                                    </div>
                                )
                            }
                        )}
                    </Carousel>
                    <FaChevronRight
                        onClick={() => changeSlide(+ 1)}
                        size={'5em'}
                        className={"m-4"}
                    />
            </div>
        )
    } else return null;
}

export default PhotoSwiper;
