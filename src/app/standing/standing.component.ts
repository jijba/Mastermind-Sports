import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})
export class StandingComponent implements OnInit {
  data: any = null;
  competitionId=null;
  constructor(private route:ActivatedRoute,
    private router:Router,private _http: Http) { 
      
    }

  ngOnInit() {
    this.competitionId= parseInt(this.route.snapshot.params['id']);
    this.getMyStandings();
  }

  private getMyStandings() {
    const headers = new Headers();
    headers.append('X-Auth-Token', 'ae52ad8e6cf44d32954e092b7f30ec85');
    const options = new RequestOptions({headers: headers});
    return this._http.get("http://api.football-data.org/v1/competitions/"+this.competitionId+"/leagueTable", options)
                .map((res: Response) => res.json())
                 .subscribe(data => {
                        this.data = data;
                        console.log(this.data);
                },
                
                (err)=>console.log(err),
                ()=>console.log("Done")
              );
            }
  
}



