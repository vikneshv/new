//import
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Post } from "./post";
import { Con } from './con';
//new line1
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class AppService {
    //url
    readonly GET_URL = "https://jsonprovider.herokuapp.com/posts/?limit=50&sort=id+desc";
    readonly post_url = "https://jsonprovider.herokuapp.com/posts/";

    constructor(private http: Http) { }

    //get passing params using Observable
    getPosts(): Observable<Post[]> {
        return this.http.get(this.GET_URL)
            .map((response: Response) => {
                return <Post[]>response.json();
            })
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    //post passing params  using Observable
    addc(con: Con): Observable<Con> {
        // let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        //let options = new RequestOptions({ headers: headers });
        let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Access-Control-Allow-Origin', '*');

           con['userId'] = 1;
        // console.log(con,'dgfg');
        let body = JSON.stringify(con);
        console.log(body);

        // console.log(con, "post method")
        // var con1 = JSON.stringify({
        //     "title": "dsfdsf",
        //     "body": "dsfdsfdsf",
        //     "userId": 1
        // });

        return this.http.post(this.post_url, body, { headers: headers })
            .map((response: Response) => {
                return <Con>response.json();
            })
            .catch(this.handleErrorObservable);
    }
    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}