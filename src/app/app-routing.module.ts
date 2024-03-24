import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './landing/hero/hero.component';
import { HomeComponent } from './dashboard/home/home.component';
const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: 'dashboard', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
