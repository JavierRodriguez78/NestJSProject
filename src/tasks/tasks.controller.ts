import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';


@Controller('tasks')
export class TasksController {

    constructor (private taskService: TasksService){}

    @Get()
    getAllTasks(): Task[]{
       return this.taskService.getAllTasks();
    }

    @Post()
    createTask(
        @Body('title') title:string,
        @Body('description') description:string,
    ): Task {
        return this.taskService.createTask(title, description);
    }

   @Get('/:id')
   getTaskById(@Param('id') id:string): Task{
        return this.taskService.getTaskById(id);
   }

}
