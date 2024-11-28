import { Component, Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import {
  CellClassRules,
  ClientSideRowModelModule,
  ColDef,
} from 'ag-grid-community';
@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.scss',
})
export class AgGridComponent {
  @Input() public tableData = [
    { first: 'Ali', last: 'Ahmed', dob: '10/25/1987', age: 32, living: true },
    { first: 'Ajmal', last: 'Khan', dob: '11/26/1988', age: 31, living: true },
    {
      first: 'Ahmer',
      last: 'Arham',
      dob: '12/27/1989',
      age: 20,
      living: false,
    },
    { first: 'Zeeshu', last: 'Shani', dob: '1/28/1990', age: 15, living: true },
    {
      first: 'Firdose',
      last: 'Market',
      dob: '2/29/1999',
      age: 50,
      living: false,
    },
    { first: 'Ali', last: 'Ahmed', dob: '10/25/1987', age: 32, living: true },
    { first: 'Ajmal', last: 'Khan', dob: '11/26/1988', age: 31, living: true },
    {
      first: 'Ahmer',
      last: 'Arham',
      dob: '12/27/1989',
      age: 20,
      living: false,
    },
    { first: 'Zeeshu', last: 'Shani', dob: '1/28/1990', age: 15, living: true },
    {
      first: 'Firdose',
      last: 'Market',
      dob: '2/29/1999',
      age: 50,
      living: false,
    },
    { first: 'Ali', last: 'Ahmed', dob: '10/25/1987', age: 32, living: true },
    { first: 'Ajmal', last: 'Khan', dob: '11/26/1988', age: 31, living: true },
    {
      first: 'Ahmer',
      last: 'Arham',
      dob: '12/27/1989',
      age: 20,
      living: false,
    },
    { first: 'Zeeshu', last: 'Shani', dob: '1/28/1990', age: 15, living: true },
    {
      first: 'Firdose',
      last: 'Market',
      dob: '2/29/1999',
      age: 50,
      living: false,
    },
    { first: 'Ali', last: 'Ahmed', dob: '10/25/1987', age: 32, living: true },
    { first: 'Ajmal', last: 'Khan', dob: '11/26/1988', age: 31, living: true },
    {
      first: 'Ahmer',
      last: 'Arham',
      dob: '12/27/1989',
      age: 20,
      living: false,
    },
    { first: 'Zeeshu', last: 'Shani', dob: '1/28/1990', age: 15, living: true },
    {
      first: 'Firdose',
      last: 'Market',
      dob: '2/29/1999',
      age: 50,
      living: false,
    },
  ];

  themeClass = 'ag-theme-quartz';

  colDefs: ColDef[] = [
    { field: 'first' ,headerName : "First Name" },
    { field: 'last',headerName: "Last Name" },
    { field: 'dob' ,headerName: "Date Of Brith"},
    {
      field: 'age',
      cellStyle: (params: any) => {
        if (params.value < 22) {
          return { backgroundColor: '#f8f8f8' };
        }
        return { backgroundColor: '#dcdcdc' };
      },
    },
    { field: 'living' ,headerName:"Living Status"},
  ];

  defaultColDef: ColDef = {
    flex: 1,

  };

  public pagination = true;
  public paginationPageSize = 10;
  public paginationPageSizeSelector = [5, 10, 15, 20, 50, 100];

  rowClassRules = {
    getRowStyle: (params: any) => {
      if (params.data.living === true) {
        return { backgroundColor : 'goldenrod' };
      }
      return { backgroundColor: 'lightblue' };
    },
  };
}
