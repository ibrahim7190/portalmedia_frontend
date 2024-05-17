import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DepartmentComponent } from './components/department/department.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ScreenshotsComponent } from './components/screenshots/screenshots.component';
import { ProjfilesComponent } from './components/projfiles/projfiles.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { MagazineComponent } from './components/magazine/magazine.component';




const routes: Routes = [
  {path:'login',component:LoginComponent},

  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path:'signup',component:SignupComponent},
      { path: 'department', component: DepartmentComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'screenshots', component: ScreenshotsComponent },
      { path: 'projfiles', component: ProjfilesComponent },
      { path: 'activities', component: ActivitesComponent },
      { path: 'magazine', component: MagazineComponent },

      // Add more routes for other admin panel components
    ]
  },
  {path:'',redirectTo:'login',pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
