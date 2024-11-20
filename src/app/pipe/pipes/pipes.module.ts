import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from '../pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { routes } from './pipes.routes';



@NgModule({
  declarations: [],
  imports: [PipeDocumentationComponent,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PipesModule { }



