import L from '../../common/logger';
import {Entity, PrimaryGeneratedColumn, Column, createConnection, Connection, Repository} from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
};

export class UsersService {
  private readonly dbConfig;
  private connection: Connection;

  constructor() {
    this.dbConfig = {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        User
      ],
      //synchronize: true
    };
  }

  async all(): Promise<User[]> {
    L.info(`fetching all users`);

    const repository = await this.getRepository();
    return repository.find();
  }

  async byId(id: number): Promise<User> {
    L.info(`fetching user with id ${id}`);
    
    const repository = await this.getRepository();
    const foundUser: User = await repository.findOne(id);
    return foundUser;
  }

  async byEmail(email: string): Promise<User> {
    L.info(`fetching user with email ${email}`);
    
    const user = new User();
    user.email = email;

    const repository = await this.getRepository();
    const foundUser: User = await repository.findOne(user);
    return foundUser;
  }

  async create(user: User): Promise<User> {
    L.info(`create user with name ${user.name}`);
    
    const repository = await this.getRepository();
    const savedUser = await repository.save(user);
    return savedUser;
  }

  private async getRepository(): Promise<Repository<User>> {
    if (!this.connection) {
      this.connection = await createConnection(this.dbConfig);
    }

    return this.connection.manager.getRepository(User);
  }
}

export default new UsersService();