import axios from 'axios';
import { AppDataSource } from '../config/database';
import { User } from '../entities/User';

export class UserService {
  private userRepository = AppDataSource.getRepository(User);

  async createUser(name: string, email: string): Promise<User> {
    const user = new User();
    user.name = name;
    user.email = email;
    return await this.userRepository.save(user);
  }

  async getUserById(id: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ id });
  }

  async fetchUserDataFromAPI(): Promise<any> {
    const response = await axios.get('https://api.example.com/user');
    return response.data;
  }
}
