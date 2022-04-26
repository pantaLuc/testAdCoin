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
  // find by id
  async read(id: number) {
    return await this.repo.findOne({ where: { id: id } });
  }
  //. update
  async update(id: number, data: Partial<Dog>) {
    await this.repo.update({ id }, data);
    return await this.repo.findOne({ id });
  }
  async destroy(id: number) {
    await this.repo.delete({ id });
    return { deleted: true };
  }
}
