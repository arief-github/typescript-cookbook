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

// regular fetchList
// function fetchFile<List extends URLList>(urls: List, key: keyof List) {
//     return fetch(urls[key]).then((res) => res.json())
// }

// fetchList fetch Array
function fetchFile<List extends URLList, Keys extends keyof List>(urls: List, keys: Keys[]){
    const els = keys.map((el) => fetch(urls[el]).then((res) => res.json()).then((data) => { 
        const entry: [Keys, any] = [el, data]
        return entry
    }))

    return els
}

// const de = fetchFile(languanges, 'de')
// const it = fetchFile(languanges, 'it')

const de_and_fr = fetchFile(languanges, ["de", "fr", "en"])

// wrong condition checked since the function more strength and broaded
const it_and_de = fetchFile(languanges, ["it", "de"])

// for(const entry of de_and_fr) {
//     const result = await entry
//    
//     if(result[0] === 'en') {
//        
//     }
// }