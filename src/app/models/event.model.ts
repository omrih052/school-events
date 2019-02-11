import { eventModel } from './event.model';

export interface eventModel {
    id: number,
    dateStart: Date,
    duration: number,
    participants: [];
}