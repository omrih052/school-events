import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { ProjectService } from '../services/services.service';
import { BackerService } from '../services/backer.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: ProjectModel;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private backerService: BackerService) { }

  ngOnInit() {
  }

  delete(): void {
    const porjectId = this.project.id;
    this.deleteEvent.emit(porjectId);
  }

}