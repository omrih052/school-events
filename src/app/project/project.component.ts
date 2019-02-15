import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { BackerService } from '../services/backer.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  [x: string]: any;
  @Input() project: ProjectModel;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private backerService: BackerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      console.log(res);
      const id = +res.id;
      if (id) {
        this.projectService.get(id).subscribe(projectData => {
          this.project = <ProjectModel>projectData;
        })
      }
    });

  }

  delete(): void {
    const porjectId = this.project.id;
    this.deleteEvent.emit(porjectId);
  }
}