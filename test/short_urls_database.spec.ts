import ShortUrl from '../lib/short_url';
import  ShortUrlsDatabase  from '../lib/short_urls_database';

describe('ShortUrlsDatabase', () => {
    let shortUrlsDatabase: ShortUrlsDatabase;
  
    beforeEach(() => {
      shortUrlsDatabase = ShortUrlsDatabase.getInstance();
    });
  
    it('should add a URL and return a short URL', () => {
      const originalURL = 'https://www.google.com';
      const shortURL = shortUrlsDatabase.addURL(originalURL);
      expect(shortURL).not.toBeNull();
    });
  
    it('should retrieve the original URL from a short URL', () => {
      const originalURL = 'https://www.google.com';
      const shortURL = shortUrlsDatabase.addURL(originalURL);
      const retrievedOriginalURL = shortUrlsDatabase.getOriginalURL(shortURL);
      expect(retrievedOriginalURL).toEqual(originalURL);
    });
  
    it('should return null for a short URL that is more than 24 hours old', () => {
      // Create a short URL and set its timestamp to more than 24 hours ago
      const originalURL = 'https://www.google.com';
      const shortUrl = new ShortUrl(originalURL, 'abc123', 'hash', Date.now() - 1000 * 60 * 60 * 25);
      shortUrlsDatabase['ShortUrls'] = [shortUrl];
  
      // Attempt to retrieve the original URL using the short URL
      const retrievedOriginalURL = shortUrlsDatabase.getOriginalURL('abc123');
      expect(retrievedOriginalURL).toBeNull();
    });
  
    it('should return null for a short URL that does not exist', () => {
      const retrievedOriginalURL = shortUrlsDatabase.getOriginalURL('nonexistent');
      expect(retrievedOriginalURL).toBeNull();
    });
  });