import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CasesComponent } from './pages/cases/cases.component';
import { CaseComponent } from './pages/case/case.component';
import {HomeComponent} from './pages/home/home.component';


const routes: Routes = [
  { path: 'cases', component: CasesComponent },
  { path: 'case/:id', component: CaseComponent },
  {path: 'home', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
