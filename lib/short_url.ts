class ShortUrl{
    private originalURL: string;
    private shortURL: string;
    private hash: string;
    private timestamp: number;
    constructor(originalURL: string, shortURL: string, hash: string, timestamp: number = Date.now()){
        this.originalURL = originalURL;
        this.shortURL = shortURL;
        this.hash = hash;
        this.timestamp = timestamp;
    }
    public getOriginalURL(): string{
        return this.originalURL;
    }
    public getShortURL(): string{
        return this.shortURL;
    }
    public getHash(): string{
        return this.hash;
    }
    public getTimestamp(): number{
        return this.timestamp;
    }
}

export default ShortUrl;