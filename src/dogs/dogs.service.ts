import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

import { Dog } from './dogs.entity';

@Injectable()
export class DogsService {
  constructor(@InjectRepository(Dog) private repo: Repository<Dog>) {}
  // retrieve all dogs
  async showAll() {
    return await this.repo.find();
  }
  // create a dog

  async create(data: Dog) {
    const user = this.repo.create(data);
    await this.repo.save(data);
    return user;
  }
}
