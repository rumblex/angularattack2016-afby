export class Book {

    private id: number;
    private title: string;
    private authorName: string;
    private sharable: boolean;
    private rating: number;
    private genres: Array<string>;

    constructor(obj?:any ) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.authorName = obj && obj.authorName || null;
        this.sharable = obj && obj.sharable || null;
        this.rating = obj && obj.rating || null;
        this.genres = obj && obj.genres || null;
     }
}