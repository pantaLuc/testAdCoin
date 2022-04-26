import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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
  async createDog(@Body() data: Dog) {
    const dog = await this.dogService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Dog created successfully',
      dog,
    };
  }
  @Get(':id')
  async readADog(@Param('id') id: number) {
    const data = await this.dogService.read(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'dog fetched successfully',
      data,
    };
  }
  @Patch(':id')
  async uppdateDog(@Param('id') id: number, @Body() data: Partial<Dog>) {
    await this.dogService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'dog updated successfully',
    };
  }
  @Delete(':id')
  async deleteDog(@Param('id') id: number) {
    await this.dogService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'dog deleted successfully',
    };
  }
}
