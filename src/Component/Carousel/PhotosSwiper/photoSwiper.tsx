import React, {useState, useEffect} from "react";
import {getImageArray} from "../../../Helper/ImageArray";
import './photoSwiper.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {LCDPicture} from "../../../ObjectTypes/LCDPicture";

const INITIAL_STATE = {
    photos: [{id: -1, title: "Séjour", path: "Assets/logo.png"}],
    selectedPhoto: null,
    showModal: false,
    currentSlide: 0
}
interface Props {
    showAModal: (datas: LCDPicture) => void
}
function PhotoSwiper({showAModal}: Props): JSX.Element | null {
    const [photos, setPhotos] = useState<LCDPicture[]>(INITIAL_STATE.photos);
    const [currentSlide, setCurrentSlide] = useState(INITIAL_STATE.currentSlide);

    useEffect(() => {
        setPhotos(getImageArray());
    }, []);

    function showFullScreen(item: React.ReactNode, index: number) {
        const datas = photos[index];
        showAModal(datas);
    }
    function changeSlide(value: number) {
        setCurrentSlide(currentSlide + value)
    }

    function updateCurrentSlide(index: number) {

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
