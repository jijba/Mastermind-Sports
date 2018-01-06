import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  data: any = null;
  
    constructor(private _http: Http) {
      this.getMyCompetition();
    }
    ngOnInit() {
      this.getMyCompetition();
    }
    private getMyCompetition() {
      const headers = new Headers();
      headers.append('X-Auth-Token', 'ae52ad8e6cf44d32954e092b7f30ec85');
      const options = new RequestOptions({headers: headers});
      return this._http.get("http://api.football-data.org/v1/competitions/?season=2017", options)
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
