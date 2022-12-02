import { Track } from "./Track";

export class Album
{
    private id: number = -1;
    private title: string = "";
    private artist: string = "";
    private description: string = "";
    private year: number = 0;
    private image: string = "";
    private tracks: Track[] = [];

    constructor(id:number, title:string, artist:string, description:string, year:number, image: string, tracks:Track[])
    {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.description = description;
        this.year = year;
        this.tracks = tracks;
        this.image = image;
    }

    public get Id(): number {
        return this.id;
    }
    public set Id(id: number) {
        this.id = id;
    }

    public get Title(): string {
        return this.title;
    }

    public set Title(title: string) {
        this.title = title;
    }

    public get Artist(): string {
        return this.artist;
    }

    public set Artist(artist: string) {
        this.artist = artist;
    }

    public get Description(): string {
        return this.description;
    }
    public set Description(description: string) {
        this.description = description;
    }

    public get Year(): number {
        return this.year;
    }

    public set Year(year: number) {
        this.year = year;
    }

    public get Image(): string {
        return this.image;
    }

    public set Image(image: string) {
        this.image = image;
    }

    public get Tracks(): Track[] {
        return this.tracks;
    }
    
    public set Tracks(tracks: Track[]) {
        this.tracks = tracks;
    }

}