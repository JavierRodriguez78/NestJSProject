import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';
import { CreateDto } from './DTO/create.dto';


@Controller('tasks')
export class TasksController {

    constructor (private taskService: TasksService){}

    @Get()
    getAllTasks(): Task[]{
       return this.taskService.getAllTasks();
    }

    @Post()
    createTask(@Body() createDto:  CreateDto ): Task {
        return this.taskService.createTask(createDto);
    }

   @Get('/:id')
   getTaskById(@Param('id') id:string): Task{
        return this.taskService.getTaskById(id);
   }

}
