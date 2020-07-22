import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid}  from 'uuid';
import { CreateDto } from './DTO/create.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];
    
   getAllTasks(): Task[]{
       return this.tasks;
   }

    createTask(createDto: CreateDto): Task {
        const { title, description }=createDto;
        const task: Task={
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }
        
        this.tasks.push(task);
        return task;
    }

    getTaskById(id:string): Task{
        return this.tasks.find(task =>task.id ===id);
    }

    updateTaskStatus(id: string, status: TaskStatus): Task{

        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }

    deleteTask(id: string){
        this.tasks = this.tasks.filter( task=> task.id !==id);
    }


}
