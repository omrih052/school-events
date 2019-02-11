import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { ProjectService } from '../services/services.service';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit() {


  }

}



