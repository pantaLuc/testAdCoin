import { Sequelize } from 'sequelize-typescript';
import { Dog } from 'src/dogs/dogs.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'rootpass',
        database: 'adcoin',
      });
      sequelize.addModels([Dog]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
