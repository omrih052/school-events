import { ProjectModel } from './project.model';
export interface ProjectModel {
    id: number;
    name: string;
    desc: string;
    goal: number;
    balance: number;
    dateEnd: Date;
}