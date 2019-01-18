import { Component, OnInit, Input } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { ProjectService } from '../services/services.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  private _project: ProjectModel;

  @Input() set project(project) { this._project = project }
  constructor(privateservices: ProjectService) {
  }

  ngOnInit() {
    debugger;
  }

}