import { Field, InputType } from '@nestjs/graphql';
import { PostCreateManyWithoutAuthorInput } from '../post/post-create-many-without-author.input';
import { Role } from '../prisma/role.enum';
import { ProfileUncheckedCreateOneWithoutUserInput } from '../profile/profile-unchecked-create-one-without-user.input';

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string;

  @Field(() => String, {
    nullable: false
  })
  email!: string;

  @Field(() => String, {
    nullable: false
  })
  password!: string;

  @Field(() => Role, {
    nullable: true
  })
  role?: Role;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | string;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | string;

  @Field(() => String, {
    nullable: true
  })
  currentHashedRefreshToken?: string;

  @Field(() => PostCreateManyWithoutAuthorInput, {
    nullable: true
  })
  posts?: PostCreateManyWithoutAuthorInput;

  @Field(() => ProfileUncheckedCreateOneWithoutUserInput, {
    nullable: true
  })
  profile?: ProfileUncheckedCreateOneWithoutUserInput;
}
