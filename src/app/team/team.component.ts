import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  data: any = null;
  teamId=null;
  constructor(private route:ActivatedRoute,
    private router:Router,private _http: Http) { 
      
    }

  ngOnInit() {
    this.teamId= parseInt(this.route.snapshot.params['id']);
    this.getMyTeam();
  }

  private getMyTeam() {
    const headers = new Headers();
    headers.append('X-Auth-Token', 'ae52ad8e6cf44d32954e092b7f30ec85');
    const options = new RequestOptions({headers: headers});
    return this._http.get("http://api.football-data.org/v1/teams/"+this.teamId+"/players", options)
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