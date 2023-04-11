# URL Shortener Library

The URL Shortener Library provides functionality to shorten URLs and store them in a database.

# Installation

```
npm install define name
```
## Usage
### Shorten a URL and store it in the database

```typescript

import ShortUrlsDatabase from 'define name';

const shortUrlsDatabase = ShortUrlsDatabase.getInstance();

const originalURL = 'https://www.example.com/very-long-url-that-needs-to-be-shortened';
const shortURL = shortUrlsDatabase.addURL(originalURL);
```

### Retrieve the original URL from a short URL

```typescript

import ShortUrlsDatabase from 'define name';
const myShortURL = shortUrlsDatabase.addURL(originalURL);
const originalURL = shortUrlsDatabase.getOriginalURL(myShortURL.getShortURL());
```

## API
### ShortUrlsDatabase
`getInstance()`

Returns a singleton instance of the ShortUrlsDatabase class.

`addURL(originalURL: string): string`

Shortens a given URL and stores it in the database. Returns the shortened URL.
Parameters

    originalURL (string): The original URL to be shortened.

Returns

    A string representing the shortened URL.

`getOriginalURL(shortURL: string): string | null`

Retrieves the original URL associated with the given shortened URL, if it exists and is less than 24 hours old.
Parameters

    shortURL (string): The shortened URL to be resolved.

Returns

    A string representing the original URL, if it exists and is less than 24 hours old. Otherwise, returns null.

### URLShortenerService
`shortenURL(originalURL: string, length?: number)`

    Generates a short URL from a given original URL. If a length parameter is not provided, the length of the short URL will be 6 by default. Returns a ShortUrl object containing the original URL, the short URL, and the hash of the original URL.
Returns

    A ShortUrl object containing the original URL, the short URL, and the hash of the original URL.

_Example :_

```typescript
const urlShortenerService = new URLShortenerService();

// Generate a short URL from an original URL
const originalURL = 'https://www.example.com';
const shortUrl: ShortUrl = urlShortenerService.shortenURL(originalURL);

console.log(`Original URL: ${shortUrl.getOriginalURL()}`);
console.log(`Short URL: ${shortUrl.getShortURL()}`);
console.log(`Hash: ${shortUrl.getHash()}`);
```
### ShortUrl
`getOriginalURL(): string`

Returns the original URL associated with the shortened URL.

`getShortURL(): string`

Returns the shortened URL.

`getHash(): string`

Returns the hash of the original URL.

`getTimestamp(): number`

Returns the timestamp of when the shortened URL was added to the database.