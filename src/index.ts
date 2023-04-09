import URLs from "./urls";

const urls = URLs.getInstance();
const shortURL = urls.addURL("https://www.google.com");
console.log(shortURL);

console.log(`URL d'origine : https://www.google.com`);
console.log(`URL raccourcie : https://www.google.com/${shortURL}`);