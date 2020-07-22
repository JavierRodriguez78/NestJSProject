import { Controller, Get, Post, Body, Param, Patch, Delete, Logger } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';
import { CreateDto } from './DTO/create.dto';


@Controller('tasks')
export class TasksController {

    constructor (private taskService: TasksService){}

    @Get()
    getAllTasks(): Task[]{
        Logger.log("Devolviendo todas las tareas");
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

   @Patch('/:id/status')
   updateTaskStatus(
       @Param('id') id: string,
       @Body('status') status: TaskStatus,
   ): Task{
       
       return this.taskService.updateTaskStatus(id, status);
   }

   @Delete('/:id')
   deleteTask(@Param('id') id:string ){
        this.taskService.deleteTask(id);
   }

}
