import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';



export const routes: Routes = [
  {
    path: "", component :HomeComponent
  },
  {
    path: "services", component :ServiceDocumentationComponent
  },
  {
    path: "directives", component :DirectiveDocumentationComponent
  },
  {
    path: "pipes", loadChildren: () => import("./pipe/pipes/pipes.module").then((m) => m.PipesModule)
  },
];


