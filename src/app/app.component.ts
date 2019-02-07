import { Component, OnInit } from '@angular/core';
import { DataService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'component-lib-app';
  data:any[];
  constructor(private stuff: DataService){}
  ngOnInit(){
    this.data = [];
    this.stuff.getAllUSRivers(null).then((response) =>{
      this.data = response;
    });
  }

}
