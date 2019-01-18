import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { ProjectService } from '../services/services.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: ProjectModel[];

  constructor(private projectService: ProjectService) {
    console.log('ProjectListComponent instantiated');
  }

  ngOnInit() {
    console.log('ProjectListComponent ngOnInit')
    this.projects = this.projectService.get();
  }

}