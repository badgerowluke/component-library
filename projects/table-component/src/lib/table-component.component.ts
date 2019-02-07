import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'enl-table-component',
  templateUrl: 'table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: any[];
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(changes) {
    console.log(changes)
  }

}
