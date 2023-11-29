import { ArgsType, Field } from "@nestjs/graphql";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CheckUserValues, Credentials, SingupCredentials } from "./Credentials";

@ArgsType()
export class LoginArgs {
  @Field(() => Credentials, { nullable: false })
  credentials!: Credentials;
}
@ArgsType()
export class SingupArgs {
  @Field(() => Credentials, { nullable: false })
  credentials!: SingupCredentials;
}
@ArgsType()
export class CheckUserArgs {
  @Field(() => CheckUserValues, { nullable: false })
  CheckUserValues!: CheckUserValues;
}