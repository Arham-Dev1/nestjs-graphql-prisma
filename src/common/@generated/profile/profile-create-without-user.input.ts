import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProfileCreateWithoutUserInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string;

  @Field(() => String, {
    nullable: false
  })
  username!: string;

  @Field(() => String, {
    nullable: true
  })
  firstName?: string;

  @Field(() => String, {
    nullable: true
  })
  lastName?: string;

  @Field(() => String, {
    nullable: true
  })
  bio?: string;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | string;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | string;
}
