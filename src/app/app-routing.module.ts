import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { DisplayComponent } from './portfolio/display/display.component';
const routes: Routes = [
  { path:'',component: HomepageComponent},
  { path:'display', component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
