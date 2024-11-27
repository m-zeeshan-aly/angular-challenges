import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input() public tableData=[
    {first: "Ali" ,last: "Ahmed",dob:"10/25/1987"},
    {first: "Ajmal" ,last: "Khan",dob:"11/26/1988"},
    {first: "Ahmer" ,last: "Arham",dob:"12/27/1989"},
    {first: "Zeeshu" ,last: "Shani",dob:"1/28/1990"},
    {first: "Firdose" ,last: "Market",dob:"2/29/1999"}
  ]

  @Output() public headerSelected = new EventEmitter<{key:string,value:any}>();

  public headerSelection(key:string,value:any):void{
    this.headerSelected.emit({value,key});
  }

}




