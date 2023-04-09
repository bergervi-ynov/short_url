import URLShortener from './url_shortener';

class URLs {
    private shortUrls: Map<string, string>;
    private originalUrls: Map<string, string>;
    private urlShortener: URLShortener;
    private static instance: URLs;

    private constructor() {        
        this.shortUrls = new Map<string,string>();
        this.originalUrls = new Map<string,string>();
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
        this.originalUrls.set(originalURL, hash );
        this.shortUrls.set(shortURL,hash);
        return shortURL;
    }

    public getOriginalURL(shortURL: string): string | null {
        const hash = this.shortUrls.get(shortURL);
        if (hash) {
            for (const [originalURL, hashValue] of this.originalUrls) {
                if (hashValue === hash) {
                    return originalURL;
                }
            }
        }
        return null;
    }

}

export default URLs;