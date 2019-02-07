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
        name: ' Project1',
        desc: 'desc1',
        goal: 200,
        balance: 10,
        dateEnd: new Date()
      }, {
        id: 2,
        name: ' Project2',
        desc: 'desc2',
        goal: 200,
        balance: 10,
        dateEnd: new Date()
      }, {
        id: 3,
        name: ' Project3',
        desc: 'desc3',
        goal: 200,
        balance: 10,
        dateEnd: new Date()
      }, {
        id: 4,
        name: ' Project4',
        desc: 'desc4',
        goal: 200,
        balance: 10,
        dateEnd: new Date()
      }, {

        id: 5,
        name: ' Project5',
        desc: 'desc5',
        goal: 200,
        balance: 10,
        dateEnd: new Date()
      }
    ];
  }

  delete(id: number) {
    const idx = this.projectList.findIndex(p => p.id == id);
    this.projectList.splice(idx, 1);
  }
  get(): ProjectModel[] {
    console.log('get method of ProjectService invoked')
    return this.projectList;
  }
}