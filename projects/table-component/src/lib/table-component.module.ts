import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table-component.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableComponentModule { }
