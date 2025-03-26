Inti permasalahan di sini adalah duplikasi logika yang sebenarnya sama, hanya saja diterapkan pada tipe data objek yang berbeda. Dalam contoh di atas, kita memiliki dua fungsi pengecekan:

1. **isLanguangeAvailable** – mengecek apakah sebuah string merupakan kunci dari objek bertipe *Languanges*.
2. **isElementAllowed** – mengecek apakah sebuah string merupakan kunci dari objek bertipe *AllowedElements*.

Meskipun kedua fungsi tersebut menggunakan logika yang identik—yaitu memeriksa apakah suatu properti ada di dalam objek—mereka tidak bisa disatukan secara langsung karena tipe objek (dan nilai kunci yang diizinkan) berbeda.

### Akar Masalah

- **Duplikasi Kode:** Kedua fungsi tersebut memiliki struktur yang hampir sama, yaitu: menerima sebuah objek dan sebuah string, lalu mengembalikan boolean apakah string tersebut merupakan kunci yang valid untuk objek tersebut.
- **Informasi Tipe yang Berbeda:** Meskipun logikanya serupa, tipe objek yang diuji (misalnya, *Languanges* dan *AllowedElements*) tidak memiliki hubungan secara struktural (selain sama-sama objek). Ini membuat kita tidak bisa langsung menggunakan satu fungsi karena tipe parameternya tidak kompatibel satu sama lain.

### Solusi dengan Generics

Dengan menggunakan generics, kita dapat mengekstrak pola umum dari fungsi-fungsi tersebut dan membuat satu fungsi yang bisa bekerja dengan berbagai tipe objek. Konsep generics memungkinkan fungsi untuk "menerima" tipe sebagai parameter, sehingga kita dapat mengabstraksi tipe spesifik dari objek dan kunci.

Contoh solusi dengan generics:

```typescript
function isKeyOf<T>(collection: T, key: string): key is keyof T {
    return key in collection;
}

// Penggunaan pada tipe Languanges
function loadLanguage(collection: Languanges, lang: string) {
    if (isKeyOf(collection, lang)) {
        // Di sini collection[lang] sudah terjamin tipenya URL
        return collection[lang];
    }
}

// Penggunaan pada tipe AllowedElements
function selectElement(collection: AllowedElements, elem: string) {
    if (isKeyOf(collection, elem)) {
        // Di sini collection[elem] sudah terjamin tipenya sesuai dengan AllowedElements
        return collection[elem];
    }
}
```

**Penjelasan Solusi:**

- **Generalization:** Dengan mendefinisikan fungsi `isKeyOf<T>`, kita mengambil keuntungan dari fakta bahwa baik *Languanges* maupun *AllowedElements* merupakan objek, dan kunci yang kita periksa adalah properti dari objek tersebut. Jadi, bukan hanya terikat pada tipe tertentu, melainkan generik terhadap tipe objek apa pun.
- **Type Inference:** Fungsi generik ini mengizinkan TypeScript untuk menyimpulkan tipe dari `collection` dan memberikan jaminan tipe (type predicate) bahwa jika kondisi `key in collection` terpenuhi, maka `key` merupakan `keyof T`. Hal ini memungkinkan kita mengakses `collection[key]` dengan tipe yang benar.
- **Efisiensi dan Pemeliharaan:** Dengan menggabungkan logika pengecekan menjadi satu fungsi generik, kita menghindari duplikasi kode. Perubahan atau perbaikan logika hanya perlu dilakukan di satu tempat, sehingga meningkatkan efisiensi pemeliharaan kode.

Singkatnya, solusi dengan generics menyederhanakan kode dengan mengabstraksi pola umum dari fungsi-fungsi yang tampaknya berbeda secara tipikal, tetapi pada dasarnya melakukan operasi yang sama, yaitu memeriksa apakah suatu string merupakan kunci valid dalam sebuah objek. Hal ini meningkatkan efisiensi kode, mengurangi duplikasi, dan menjaga konsistensi tipe data dalam aplikasi.