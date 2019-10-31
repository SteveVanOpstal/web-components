import LoadImage from './LoadImage';

import { createCustomElement, DOMModel, byAttrVal } from "@adobe/react-webcomponent";

class LoadImageModel extends DOMModel {
  @byAttrVal src;
  @byAttrVal('src-thumb') srcThumb;
  @byAttrVal alt;
}

const LoadImageElement = createCustomElement(LoadImage, LoadImageModel, "element");

window.customElements.define("react-load-image", LoadImageElement);
