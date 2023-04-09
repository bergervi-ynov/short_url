import URLShortener from './url_shortener';

class URLs {
    private urls: Map<string, string>;
    private urlShortener: URLShortener;
    private static instance: URLs;

    private constructor() {        
        this.urls = new Map<string,string>();
        this.urlShortener = new URLShortener();
     }

    public static getInstance(): URLs {
        if (!URLs.instance) {
            URLs.instance = new URLs();
        }
        return URLs.instance;
    }   

    public addURL(originalURL: string): string {
        const [shortURL, hash] = this.urlShortener.shortenURL(originalURL);
        this.urls.set(shortURL, hash);
        return shortURL;
    }

}

export default URLs;