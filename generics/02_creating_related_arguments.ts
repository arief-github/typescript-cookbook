type Languanges = {
    de: URL;
    en: URL;
    pt: URL;
    es: URL;
    fr: URL;
    ja: URL;
}

declare const languanges: Languanges; 

type URLList = {
    [x: string]: URL
}

function fetchFile(urls: URLList, key: string) {
    return fetch(urls[key]).then((res) => res.json())
}

const de = fetchFile(languanges, 'de')
const it = fetchFile(languanges, 'it') // mengapa bisa masuk selain tipe dari languanges ?