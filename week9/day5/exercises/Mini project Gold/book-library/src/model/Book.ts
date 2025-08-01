export interface Book {
    id: string;
    title: string;
    author: string;
    category: string;
    isRead: boolean;
    dateAdded: string;
}

export class BookItem implements Book {
    constructor(
        public id: string,
        public title: string,
        public author: string,
        public category: string,
        public isRead: boolean = false,
        public dateAdded: string = new Date().toISOString()
    ) { }

    serialize() {
        return JSON.stringify(this);
    }

    static deserialize(json: string): BookItem {
        const data = JSON.parse(json);
        return new BookItem(
            data.id,
            data.title,
            data.author,
            data.category,
            data.isRead,
            data.dateAdded
        );
    }
}
