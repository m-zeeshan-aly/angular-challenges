import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-sort-table',
  standalone: true,
  imports: [CommonModule,TableComponent],
  templateUrl: './sort-table.component.html',
  styleUrl: './sort-table.component.scss'
})
export class SortTableComponent {
  @Input() public tableData=[
    {first: "Ali" ,last: "Ahmed",dob:"10/25/1987",age:32,living:true},
    {first: "Ajmal" ,last: "Khan",dob:"11/26/1988",age:31,living:true},
    {first: "Ahmer" ,last: "Arham",dob:"12/27/1989",age:20,living:false},
    {first: "Zeeshu" ,last: "Shani",dob:"1/28/1990",age:15,living:true},
    {first: "Firdose" ,last: "Market",dob:"2/29/1999",age:50,living:false}
  ]

  public sortDirection = true;

  private isDate(value:any){
    const parsedDate = Date.parse(value);
    return isNaN (value) && !isNaN(parsedDate);
  }

  public sort(headerData:{key:string,value:any}):void{
    const {key,value} = headerData;


    this.sortDirection =!this.sortDirection;

    switch(true){
      case typeof value==="boolean":
        this.sortBoolean(key);

        break;
      case typeof value==="number":
        this.sortNumber(key);

        break;

      case this.isDate(value):
        this.sortDate(key);
        break

      case typeof value === "string":
        this.sortString(key);
        break
    }

  }

  private sortNumber(key:string):void{
    this.tableData.sort((value1:any,value2:any) => {
      if (this.sortDirection){
        return Number(value1[key]) - Number(value2[key]);

      }
      else {
        return Number(value2[key]) - Number(value1[key]);
      }
    });
  }

  private sortString(key:string):void{
    this.tableData.sort((value1:any,value2:any) => {
      const value1UpperCase = String(value1[key]).toUpperCase();
      const value2UpperCase = String(value2[key]).toUpperCase();

      if (this.sortDirection){
        if (value1UpperCase>value2UpperCase){
          return -1;
        }
        if (value2UpperCase>value1UpperCase){
          return 1;
        }
        return 0;


      }
      else {
        if (value2UpperCase>value1UpperCase){
          return -1;
        }
        if (value1UpperCase>value2UpperCase){
          return 1;
        }
        return 0;
      }
    });
  }

  private sortBoolean(key:string):void{
    this.tableData.sort((value1:any,value2:any) => {
      if (this.sortDirection){
        return Number(value1[key]) - Number(value2[key]);

      }
      else {
        return Number(value2[key]) - Number(value1[key]);
      }
    });
  }




  private sortDate(value:any):void{
    this.tableData.sort((value1:any,value2:any)=>{
      if(this.sortDirection){
        return new Date(value1[value]).getTime()- new Date(value2[value]).getTime()
      }else{

        return new Date(value2[value]).getTime()- new Date(value1[value]).getTime()
      }
    })
  }


}





