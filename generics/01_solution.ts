// Definisi Type 
type Languanges = {
    de: URL;
    en: URL;
    pt: URL;
    es: URL;
    fr: URL;
    ja: URL;
}

type AllowedElements = {
    video: HTMLVideoElement;
    audio: HTMLAudioElement;
    canvas: HTMLCanvasElement;
}

// Generics for helping redundant logics

function isAvailable<Obj>(
    obj: Obj,
    key: string | number | symbol
): key is keyof Obj {
    return key in obj
}


function isLanguangeAvailable(collection: Languanges, lang: string) {
    if(isAvailable(collection, lang)) {
        collection[lang]
    }
}

function selectElement(collection: AllowedElements, elem: string) {
    if(isAvailable(collection, elem)) {
        collection[elem]
    }
}
