import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list.component';
import { ProjectComponent } from '../project/project.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectComponent
  ],
  imports: [    
    BrowserModule],
  exports: [
    ProjectListComponent,
    ProjectComponent
  ]
})
export class ProjectListModule { }
