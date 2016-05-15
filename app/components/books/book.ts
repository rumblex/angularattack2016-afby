export class Book {

    public bookId: number;
    public title: string;
    public authorName: string;
    public sharable: boolean;
    public rating: number;
    public genres: Array<string>;

    constructor(obj?:any ) {
        this.bookId = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.authorName = obj && obj.authorName || null;
        this.sharable = obj && obj.sharable || null;
        this.rating = obj && obj.rating || null;
        this.genres = obj && obj.genres || null;
     }
}