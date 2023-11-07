import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { TaskService } from './task.service'

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(
    @Body() taskData: { title: string; content: string; authorId: number }
  ) {
    return this.taskService.create(taskData)
  }

  @Get()
  findAll(@Body() skip: number, take: number) {
    return this.taskService.findAll(skip, take)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne({ id: +id })
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() taskData: { title: string; content: string }
  ) {
    return this.taskService.update({ id: +id }, taskData)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete({ id: +id })
  }
}
