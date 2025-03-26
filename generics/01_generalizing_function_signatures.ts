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

function isLanguangeAvailable(
    collection: Languanges,
    lang: string
): lang is keyof  Languanges{
    return lang in collection
}

function isElementAllowed(
    collection: AllowedElements,
    elem: string
): elem is keyof AllowedElements {
    return elem in collection
}

function loadLanguange(collection: Languanges, lang: string) {
    if(isLanguangeAvailable(collection, lang)) {
        collection[lang]
    }
}

function selectElement(collection: AllowedElements, elem: string) {
    if(isElementAllowed(collection, elem)) {
        collection[elem]
    }
}
