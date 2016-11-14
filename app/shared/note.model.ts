export interface INote{
    title: string;
    category:string;
    text:string;
}

export class Note implements INote {
    title: string;
    category:string;
    text:string;

    constructor(title: string, category:string, text:string){
        this.title = title;
        this.category = category;
        this.text = text;
    }

}