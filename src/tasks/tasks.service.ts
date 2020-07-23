import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid}  from 'uuid';
import { CreateDto } from './DTO/create.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];



    constructor(@InjectModel("Task") private taskModel: Model<Task>){}
    
   getAllTasks(): Task[]{
       return this.tasks;
   }

    createTask(createDto: CreateDto): Promise<Task> {
      const createdTask = new this.taskModel(createDto);
      return createdTask.save();
    }

    getTaskById(id:string): Task{
        return this.tasks.find(task =>task.id ===id);
    }

    updateTaskStatus(id: string, status: TaskStatus): Task{

        return null
    }

    deleteTask(id: string){
        this.tasks = this.tasks.filter( task=> task.id !==id);
    }


}
