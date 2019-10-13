import { Field, InputType } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class PasswordInput {
  @Field()
  @Length(1, 255)
  password: string;
}
