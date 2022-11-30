export class Track
{
    private id: number = -1;
    private number: number = 0;
    private title: string = "";
    private lyrics: string = "";

    constructor(id:number, number:number, title:string, lyrics:string)
    {
        this.id = id;
        this.number = number;
        this.title = title;
        this.lyrics = lyrics;
    }

    public get Id(): number {
        return this.id;
    }

    public set Id(id: number) {
        this.id = id;
    }

    public get Number(): number {
        return this.number;
    }

    public set Number(number: number) {
        this.number = number;
    }

    public get Title(): string {
        return this.title;
    }

    public set Title(title: string) {
        this.title = title;
    }

    public get Lyrics(): string {
        return this.lyrics;
    }
    
    public set Lyrics(lyrics: string) {
        this.lyrics = lyrics;
    }
}