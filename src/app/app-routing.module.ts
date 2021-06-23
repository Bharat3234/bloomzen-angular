import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

// route registration
const routes: Routes = [
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Angular Routing
/*
to navigate from one page to another page
*/
