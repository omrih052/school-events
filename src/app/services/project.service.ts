import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    projectList: ProjectModel[];
    constructor(private httpClient: HttpClient, private userService: UserService) {

    }

    delete(id: number) {
        return this.httpClient.delete<ProjectModel[]>(environment + 'project');
    }

    get(id?: number): Observable<ProjectModel[] | ProjectModel> {
        if (id) {
            return this.httpClient.get<ProjectModel>(environment + 'project/' + id);
        }
        else {
            return this.httpClient.get<ProjectModel[]>(environment + 'project');
        }
    }

    post(p?: ProjectModel) {
        if (!p) {
            p = {
                id: Number(),
                balance: 2.2,
                // created_timestamp: new Date(),
                dateEnd: new Date(),
                desc: 'test from post',
                goal: 200,
                name: 'tes from post',
                // updated_timestamp: new Date()
            }
        }
        return this.httpClient.post<any>(environment + 'project', p, {
            headers: {
                "Authorization": 'Bearer ' + this.userService.getToken()
            }
        });
    }
}