import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TableComponentService } from './table-component.service';

@Component({
  selector: 'enl-table-component',
  templateUrl: 'table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: any[];
  headers: any[];
  objectKeys = Object.keys;

  constructor(private service:TableComponentService) { }

  ngOnInit() {
    this.headers = [];

  }
  ngOnChanges(changes) {

    this.data = changes["data"].currentValue;
    this.parseDataHeaders();
    console.log(this.headers);
  }
  parseDataHeaders :() => void = () => {
    if(this.data){
      const schemaObj = this.data[0];
  
      let heads = [];

      for(var key in schemaObj){
        heads.push({name:key.toUpperCase(), visible:true});
      }

      this.headers = heads;

    }
  }


}
