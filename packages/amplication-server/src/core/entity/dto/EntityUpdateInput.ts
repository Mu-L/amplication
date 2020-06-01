import { Field, InputType } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
  description: undefined
})
export class EntityUpdateInput {
  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  displayName?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  pluralDisplayName?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  description?: string | null;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  isPersistent?: boolean | null;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  allowFeedback?: boolean | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  primaryField?: string | null;
}