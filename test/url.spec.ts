
import ShortUrl from '../lib/short_url';

describe("ShortUrl", () => {
    it("should create a new instance of ShortUrl", () => {
      const originalURL = "https://www.example.com";
      const shortURL = "https://sho.rt/abc123";
      const hash = "abc123";
      const timestamp = Date.now();
  
      const shortUrl = new ShortUrl(originalURL, shortURL, hash, timestamp);
  
      expect(shortUrl).toBeDefined();
      expect(shortUrl.getOriginalURL()).toEqual(originalURL);
      expect(shortUrl.getShortURL()).toEqual(shortURL);
      expect(shortUrl.getHash()).toEqual(hash);
      expect(shortUrl.getTimestamp()).toEqual(timestamp);
    });
  });