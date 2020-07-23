import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule,
    MongooseModule.forRoot('mongodb+srv://xavi:xavi78@cluster0.dtzfi.mongodb.net/Prueba?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
