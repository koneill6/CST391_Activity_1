import { Artist } from "../models/Artist";
import { Album } from "../models/Album";
import { Track } from "../models/Track";

import * as mysql from "mysql";

import * as util from "util";

export class MusicDAO
{
    private host: string = "";
    private username: string = "";
    private password: string = "";

    constructor(host:string, username:string, password:string)
    {
        this.host = host;
        this.username = host;
        this.password = password
    }

    public get Host(): string {
        return this.host;
    }

    public set Host(host: string) {
        this.host = host;
    }

    public get Username(): string {
        return this.username;
    }

    public set Username(username: string) {
        this.username = username;
    }

    public get Password(): string {
        return this.password;
    }

    public set Password(password: string) {
        this.password = password;
    }

    public findArtists(callback:any)
    {
        let artists:Artist[] = [];

        this.pool.getConnection(function(err:any, connection:any)
        {
            if (err) throw err

            connection.query('SELECT distinct ARTIST FROM ALBUM', function (err:any, rows:any, fields:any)
            {
                connection.release();

                if (err) throw err

                for(let x = 0; x < rows.length; ++x )
                {
                    artists.push(new Artist(x, rows[x].ARTIST));
                }

                callback(artists);
            });
        });
    }
}