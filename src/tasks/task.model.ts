import { Document } from 'mongoose';

export interface Task extends Document{
    id: string;
    title: string;
    description: string;
    status: string;
}

export enum TaskStatus{
    OPEN= 'OPEN',
    PROGRESS = 'PROGRESS',
    DONE = 'DONE',
}