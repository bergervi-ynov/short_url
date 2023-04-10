import * as crypto from 'crypto';
import ShortUrl from './short_url';

// Generate a random URL.
// By default, the length of the URL is 6. But it can be modified by passing the length as a parameter.
class URLShortenerService{
   

    //Genereate a random URL
    private generateShortURL(length: number = 6): string{
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let shortURL = "";
        for (let index=0; index<length; index++){
            shortURL += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return shortURL;
    }

    //Genereate a random URL with the original URL as a seed
    //Return the short URL and the hash of the original URL
    public  shortenURL (originalURL: string, length: number = 6): ShortUrl{
        //Create a unique key from the original URL
        const  hash = crypto.createHash('sha256').update(originalURL).digest('hex');
        const shortURL = this.generateShortURL(length);
        return new ShortUrl(originalURL, shortURL, hash);
    }

}

export default URLShortenerService;