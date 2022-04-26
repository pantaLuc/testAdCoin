import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Dog } from './dogs.entity';
import { DogsService } from './dogs.service';

@Controller('dogs')
@ApiTags('dogs')
export class DogsController {
  constructor(private dogService: DogsService) {}
  // route for all dogs
  @Get()
  findAll() {
    return this.dogService.showAll();
  }
  // find a Dog
  @Post()
  async createUsers(@Body() data: Dog) {
    const dog = await this.dogService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Dog created successfully',
      dog,
    };
  }
}
