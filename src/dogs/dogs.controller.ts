import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Dog } from './dogs.entity';
import { DogsService } from './dogs.service';

@Controller('dogs')
@ApiTags('dogs')
export class DogsController {
  constructor(private dogService: DogsService) {}
  @Get()
  findall(): Promise<Dog[]> {
    return this.findall();
  }
}
