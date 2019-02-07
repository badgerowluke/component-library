import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from '../environments/environment';
import 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
    constructor(private http: Http){}
    getAllUSRivers: (partialName: string) => Promise<any[]> = (partialName: string) => {
        if(!partialName) {
            return this.http.get(environment.baseUrl + "/api/Rivers?code=" + environment.riverKeyCode)
            
            .map((response: Response) => <any[]>response.json()).toPromise();
        } else {
            return this.http.get(environment.baseUrl + '/api/Rivers?name=' + partialName + "&code=" + environment.riverKeyCode)
            .map((response: Response) => <any[]>response.json()).toPromise();
        }
    }    
    getRiverDetails: (riverCode: string) => Promise<any> = (riverCode: string) => {
        return this.http.get(environment.baseUrl + '/api/RiverDetails?riverCode=' + riverCode + "&code=" + environment.detailsKeyCode)
        .map((response: Response) => <any>response.json()).toPromise();
    }    

}