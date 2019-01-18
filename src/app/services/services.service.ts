import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectList: ProjectModel[];
  constructor() {
    this.projectList = [
      {
        id: 1,
        name: 'p1',
        desc: 'desc1',
        goal: 200,
        balance: 10,

      }, {
        id: 2,
        name: 'p2',
        desc: 'desc2',
        goal: 200,
        balance: 10,

      }, {
        id: 3,
        name: 'p3',
        desc: 'desc3',
        goal: 200,
        balance: 10,

      }, {
        id: 4,
        name: 'p4',
        desc: 'desc4',
        goal: 200,
        balance: 10,

      }, {

        id: 5,
        name: 'p5',
        desc: 'desc5',
        goal: 200,
        balance: 10,

      }
    ];
  }

  delete(id: number) {

    debugger;
    const idx = this.projectList.findIndex(p => p.id == id);
    this.projectList.splice(idx, 1);
  }
  get(): ProjectModel[] {
    console.log('get method of ProjectService invoked')
    return this.projectList;
  }
}