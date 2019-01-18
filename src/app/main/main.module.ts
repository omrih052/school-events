import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { ProjectListModule } from '../project-list/project-list.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [ProjectListModule],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
