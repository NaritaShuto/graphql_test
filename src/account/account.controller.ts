import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { AccountService } from './account.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountFrom } from './dto/account.dto';
import { UserIdForm, UserList } from './dto/id.dto';

@ApiTags('account')
@Controller('public/account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiBody({ type: AccountFrom })
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  @Post('create')
  async createUser(@Body() data: AccountFrom) {
    return this.accountService.createUser(data);
  }

  @ApiResponse({ status: HttpStatus.NO_CONTENT, type: UserList })
  @Get('userList')
  async getUserList() {
    return this.accountService.getUserList();
  }

  @ApiResponse({ status: HttpStatus.NO_CONTENT, type: AccountFrom })
  @Get('user')
  async getUser(@Query() data: UserIdForm) {
    return this.accountService.getUser(data);
  }

  @ApiBody({ type: AccountFrom })
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  @Post('update')
  async updateUser(@Body() data: AccountFrom) {
    return this.accountService.updateUser(data);
  }

  @ApiBody({ type: UserIdForm })
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  @Post('remove')
  async removeUser(@Body() data: UserIdForm) {
    return this.accountService.removeUser(data);
  }
}
