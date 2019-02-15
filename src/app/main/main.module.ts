import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { ProjectListModule } from '../project-list/project-list.module';
import { RightSideComponent } from '../right-side/right-side.component';


@NgModule({
  declarations: [
    MainComponent,
    RightSideComponent
  ],
  imports: [ProjectListModule],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
