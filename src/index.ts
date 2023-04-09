import URLs from "./urls";

const urls = URLs.getInstance();
const shortURL = urls.addURL("https://www.google.com");
console.log(`URL raccourcie : https://www.google.com/${shortURL}`);

const originalURL = urls.getOriginalURL(shortURL);
console.log(`URL originale : ${originalURL}`);