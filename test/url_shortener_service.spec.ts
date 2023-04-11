import  URLShortenerService from '../lib/url_shortener_service';

describe('URLShortenerService', () => {
    let service: URLShortenerService;
  
    beforeEach(() => {
      service = new URLShortenerService();
    });
  
    describe('generateShortURL', () => {
      it('should generate a short URL with default length 6', () => {
        const shortURL = service['generateShortURL']();
        expect(shortURL.length).toBe(6);
      });
  
      it('should generate a short URL with the specified length', () => {
        const shortURL = service['generateShortURL'](8);
        expect(shortURL.length).toBe(8);
      });
    });
  
    describe('shortenURL', () => {
      it('should generate a ShortUrl object with the original URL and short URL', () => {
        const originalURL = 'https://example.com';
        const shortUrl = service.shortenURL(originalURL);
        expect(shortUrl.getOriginalURL()).toBe(originalURL);
        expect(shortUrl.getShortURL().length).toBe(6);
      });
  
      it('should generate a ShortUrl object with the specified length of the short URL', () => {
        const originalURL = 'https://example.com';
        const shortUrl = service.shortenURL(originalURL, 8);
        expect(shortUrl.getOriginalURL()).toBe(originalURL);
        expect(shortUrl.getShortURL().length).toBe(8);
      });
  
      it('should generate a unique hash for the original URL', () => {
        const originalURL1 = 'https://example.com';
        const shortUrl1 = service.shortenURL(originalURL1);
        const originalURL2 = 'https://example.org';
        const shortUrl2 = service.shortenURL(originalURL2);
        expect(shortUrl1.getHash()).not.toBe(shortUrl2.getHash());
      });
    });
  });