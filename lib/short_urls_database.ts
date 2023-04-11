import ShortUrl from './short_url';
import URLShortenerService from './url_shortener_service';

class ShortUrlsDatabase {
    private ShortUrls: Array<ShortUrl>;
    private urlShortenerService: URLShortenerService;
    private static instance: ShortUrlsDatabase;

    private constructor() {        
        this.ShortUrls = new Array<ShortUrl>();
        this.urlShortenerService = new URLShortenerService();
     }

    public static getInstance(): ShortUrlsDatabase {
        if (!ShortUrlsDatabase.instance) {
            ShortUrlsDatabase.instance = new ShortUrlsDatabase();
        }
        return ShortUrlsDatabase.instance;
    }   

    public addURL(originalURL: string): string {
        const url : ShortUrl = this.urlShortenerService.shortenURL(originalURL);
        this.ShortUrls.push(url);
        return url.getShortURL();
    }

    public getOriginalURL(shortURL: string): string | null {
        const url = this.ShortUrls.find(url => url.getShortURL() === shortURL);
        // If the URL is found and is less than 24 hours old, return the original URL
        if (url && url.getTimestamp() + 1000 * 60 * 60 * 24 > Date.now()) {
            return url.getOriginalURL();
        }
        return null;
    }

}

export default ShortUrlsDatabase;