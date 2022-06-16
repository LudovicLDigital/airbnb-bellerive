import {LCDPicture} from "../ObjectTypes/LCDPicture";

export function getImageArray(): [LCDPicture] {
    return require("../Fixtures/pictureSet.json");
}
