import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async createUser(data) {
    return true;
  }

  async getUserList() {
    return true;
  }

  async getUser(data) {
    return true;
  }

  async updateUser(data) {
    return true;
  }

  async removeUser(data) {
    return true;
  }
}
