import { Body, Controller, Get, Post, Req, } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { CheckUserValues, Credentials, SingupCredentials } from "../auth/Credentials";
import { UserInfo } from "./UserInfo";
import { Request } from "express";
import { User } from "src/user/base/User";


@ApiTags("auth")
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("login")
  async login(@Body() body: Credentials): Promise<UserInfo> {
    return this.authService.login(body);
  }
  @ApiBearerAuth()
  @ApiOkResponse({ type: User })
  @Get("me")
  async me(@Req() request: Request): Promise<User> {
    return this.authService.me(request.headers.authorization);
  }
  @Post("check-user")
  async checkUser(@Body() body: CheckUserValues): Promise<User>{
  return this.authService.checkUser(body.email);
}
@Post("signup")
async signup(@Body() body: SingupCredentials): Promise<UserInfo>{
return this.authService.signup(body);
}
}