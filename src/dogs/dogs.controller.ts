import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DogsService } from './dogs.service';

@Controller('dogs')
@ApiTags('dogs')
export class DogsController {
  constructor(private dogService: DogsService) {}
  @Get()
  findAll() {
    return this.dogService.showAll();
  }
}
