export interface INote{
     id: number;
    title: string;
    category:string;
    text:string;
}

export class Note implements INote {
     id: number;
    title: string;
    category:string;
    text:string;

    constructor(title: string, category:string, text:string){
        this.title = title;
        this.category = category;
        this.text = text;
    }

}