import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { OtherDocumentationComponent } from './others/other-documentation/other-documentation.component';
import { SignUpComponent } from './forms/sign-up/sign-up.component';
import { SignInComponent } from './forms/sign-in/sign-in.component';
import { FormComponent } from './others/components/form/form.component';



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

  {
    path: "others", component :OtherDocumentationComponent
  },

  {
    path: "signup", component :SignUpComponent
  },

  {
    path: "signin", component :SignInComponent
  },

  {
    path: "others/apply", component :FormComponent
  },



];


