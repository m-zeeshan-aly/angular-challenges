import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from '../../models/loader-type.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-laoder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-laoder.component.html',
  styleUrl: './text-laoder.component.scss'
})
export class TextLaoderComponent implements OnInit {

  @Input() public isLoading = false;
  @Input() public loaderType : LoaderType = LoaderType.Circular;
  public LoaderType = LoaderType;
  private loadings = 'Loading';
  private  loadingPeriods = ".";


  loading(){
    this.isLoading = !this.isLoading
  }

  public get loadingText():string{
    return `${this.loadings}${this.loadingPeriods}`;

  }

  public ngOnInit(): void {
    if (this.loaderType=== LoaderType.Loading){
      this.updateLoaderPeriods();
    }
  }

  private updateLoaderPeriods(){
    let currentStep = 0;

    setInterval(()=>{
      switch(currentStep%3){
        case 0:
          this.loadingPeriods=".."
          currentStep++;
          break
        case 1:
          this.loadingPeriods="..."
          currentStep++;
          break
        case 2:
          this.loadingPeriods='.'
          currentStep=0;
          break
      }
    },500)
  }



}
