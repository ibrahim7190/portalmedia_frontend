import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DepartmentComponent } from './components/department/department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './components/projects/projects.component';
import { ScreenshotsComponent } from './components/screenshots/screenshots.component';
import { ProjfilesComponent } from './components/projfiles/projfiles.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { MagazineComponent } from './components/magazine/magazine.component';




@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SidebarComponent,
    DepartmentComponent,
    ProjectsComponent,
    ScreenshotsComponent,
    ProjfilesComponent,
    ActivitesComponent,
    MagazineComponent,

  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminPanelModule { }
