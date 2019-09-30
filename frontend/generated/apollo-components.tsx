import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** DateTime */
  DateTime: any,
};


export type Like = {
   __typename?: 'Like',
  id: Scalars['ID'],
  user: User,
  post: Post,
};

export type LikeCreateManyWithoutLikesInput = {
  create?: Maybe<Array<LikeCreateWithoutPostInput>>,
  connect?: Maybe<Array<LikeWhereUniqueInput>>,
};

export type LikeCreateOneWithoutLikeInput = {
  create?: Maybe<LikeCreateWithoutUserInput>,
  connect?: Maybe<LikeWhereUniqueInput>,
};

export type LikeCreateWithoutPostInput = {
  id?: Maybe<Scalars['ID']>,
  user: UserCreateOneWithoutUserInput,
};

export type LikeCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>,
  post: PostCreateOneWithoutPostInput,
};

export type LikeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  signupUser: User,
  deleteOnePost?: Maybe<Post>,
  like: Like,
  createDraft: Post,
  publish?: Maybe<Post>,
};


export type MutationSignupUserArgs = {
  data: UserCreateInput
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput
};


export type MutationLikeArgs = {
  authorEmail?: Maybe<Scalars['String']>,
  postID?: Maybe<Scalars['String']>
};


export type MutationCreateDraftArgs = {
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  authorEmail?: Maybe<Scalars['String']>
};


export type MutationPublishArgs = {
  id?: Maybe<Scalars['ID']>
};

export type Post = {
   __typename?: 'Post',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  published: Scalars['Boolean'],
  author?: Maybe<User>,
  likes?: Maybe<Array<Like>>,
};


export type PostLikesArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type PostCreateManyWithoutPostsInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>,
  connect?: Maybe<Array<PostWhereUniqueInput>>,
};

export type PostCreateOneWithoutPostInput = {
  create?: Maybe<PostCreateWithoutLikesInput>,
  connect?: Maybe<PostWhereUniqueInput>,
};

export type PostCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  likes?: Maybe<LikeCreateManyWithoutLikesInput>,
};

export type PostCreateWithoutLikesInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  author?: Maybe<UserCreateOneWithoutAuthorInput>,
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Query = {
   __typename?: 'Query',
  post?: Maybe<Post>,
  users: Array<User>,
  feed: Array<Post>,
  filterPosts: Array<Post>,
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput
};


export type QueryFeedArgs = {
  published?: Maybe<Scalars['Boolean']>
};


export type QueryFilterPostsArgs = {
  searchString?: Maybe<Scalars['String']>
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  posts?: Maybe<Array<Post>>,
};


export type UserPostsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<PostCreateManyWithoutPostsInput>,
  like?: Maybe<LikeCreateOneWithoutLikeInput>,
};

export type UserCreateOneWithoutAuthorInput = {
  create?: Maybe<UserCreateWithoutPostsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutUserInput = {
  create?: Maybe<UserCreateWithoutLikeInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateWithoutLikeInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<PostCreateManyWithoutPostsInput>,
};

export type UserCreateWithoutPostsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  like?: Maybe<LikeCreateOneWithoutLikeInput>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
};
export type LikeFragmentFragment = (
  { __typename?: 'Like' }
  & Pick<Like, 'id'>
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'email'>
  ), post: (
    { __typename?: 'Post' }
    & Pick<Post, 'title'>
  ) }
);

export type PostFragmentFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'published' | 'title' | 'content'>
  & { likes: Maybe<Array<(
    { __typename?: 'Like' }
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'email'>
    ) }
  )>> }
);

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email'>
);

export type CreateDraftMutationMutationVariables = {
  title: Scalars['String'],
  content: Scalars['String'],
  authorEmail?: Maybe<Scalars['String']>
};


export type CreateDraftMutationMutation = (
  { __typename?: 'Mutation' }
  & { createDraft: { __typename?: 'Post' }
    & PostFragmentFragment
   }
);

export type DeleteOnePostMutationVariables = {
  id: Scalars['ID']
};


export type DeleteOnePostMutation = (
  { __typename?: 'Mutation' }
  & { deleteOnePost: Maybe<{ __typename?: 'Post' }
    & PostFragmentFragment
  > }
);

export type LikePostMutationVariables = {
  id: Scalars['String'],
  authorEmail: Scalars['String']
};


export type LikePostMutation = (
  { __typename?: 'Mutation' }
  & { like: { __typename?: 'Like' }
    & LikeFragmentFragment
   }
);

export type PublishMutationMutationVariables = {
  id: Scalars['ID']
};


export type PublishMutationMutation = (
  { __typename?: 'Mutation' }
  & { publish: Maybe<{ __typename?: 'Post' }
    & PostFragmentFragment
  > }
);

export type SignupUserMutationMutationVariables = {
  name: Scalars['String'],
  email: Scalars['String']
};


export type SignupUserMutationMutation = (
  { __typename?: 'Mutation' }
  & { signupUser: { __typename?: 'User' }
    & UserFragmentFragment
   }
);

export type FeedQueryQueryVariables = {
  published?: Maybe<Scalars['Boolean']>
};


export type FeedQueryQuery = (
  { __typename?: 'Query' }
  & { feed: Array<{ __typename?: 'Post' }
    & PostFragmentFragment
  > }
);

export type PostQueryQueryVariables = {
  id: Scalars['ID']
};


export type PostQueryQuery = (
  { __typename?: 'Query' }
  & { post: Maybe<{ __typename?: 'Post' }
    & PostFragmentFragment
  > }
);

export type UsersQueryQueryVariables = {};


export type UsersQueryQuery = (
  { __typename?: 'Query' }
  & { users: Array<{ __typename?: 'User' }
    & UserFragmentFragment
  > }
);
export const LikeFragmentFragmentDoc = gql`
    fragment LikeFragment on Like {
  id
  user {
    email
  }
  post {
    title
  }
}
    `;
export const PostFragmentFragmentDoc = gql`
    fragment PostFragment on Post {
  id
  published
  title
  content
  likes {
    user {
      email
    }
  }
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
  email
}
    `;
export const CreateDraftMutationDocument = gql`
    mutation createDraftMutation($title: String!, $content: String!, $authorEmail: String) {
  createDraft(title: $title, content: $content, authorEmail: $authorEmail) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export type CreateDraftMutationMutationFn = ApolloReactCommon.MutationFunction<CreateDraftMutationMutation, CreateDraftMutationMutationVariables>;
export type CreateDraftMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateDraftMutationMutation, CreateDraftMutationMutationVariables>, 'mutation'>;

    export const CreateDraftMutationComponent = (props: CreateDraftMutationComponentProps) => (
      <ApolloReactComponents.Mutation<CreateDraftMutationMutation, CreateDraftMutationMutationVariables> mutation={CreateDraftMutationDocument} {...props} />
    );
    
export type CreateDraftMutationMutationResult = ApolloReactCommon.MutationResult<CreateDraftMutationMutation>;
export type CreateDraftMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateDraftMutationMutation, CreateDraftMutationMutationVariables>;
export const DeleteOnePostDocument = gql`
    mutation deleteOnePost($id: ID!) {
  deleteOnePost(where: {id: $id}) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export type DeleteOnePostMutationFn = ApolloReactCommon.MutationFunction<DeleteOnePostMutation, DeleteOnePostMutationVariables>;
export type DeleteOnePostComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteOnePostMutation, DeleteOnePostMutationVariables>, 'mutation'>;

    export const DeleteOnePostComponent = (props: DeleteOnePostComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteOnePostMutation, DeleteOnePostMutationVariables> mutation={DeleteOnePostDocument} {...props} />
    );
    
export type DeleteOnePostMutationResult = ApolloReactCommon.MutationResult<DeleteOnePostMutation>;
export type DeleteOnePostMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOnePostMutation, DeleteOnePostMutationVariables>;
export const LikePostDocument = gql`
    mutation likePost($id: String!, $authorEmail: String!) {
  like(postID: $id, authorEmail: $authorEmail) {
    ...LikeFragment
  }
}
    ${LikeFragmentFragmentDoc}`;
export type LikePostMutationFn = ApolloReactCommon.MutationFunction<LikePostMutation, LikePostMutationVariables>;
export type LikePostComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LikePostMutation, LikePostMutationVariables>, 'mutation'>;

    export const LikePostComponent = (props: LikePostComponentProps) => (
      <ApolloReactComponents.Mutation<LikePostMutation, LikePostMutationVariables> mutation={LikePostDocument} {...props} />
    );
    
export type LikePostMutationResult = ApolloReactCommon.MutationResult<LikePostMutation>;
export type LikePostMutationOptions = ApolloReactCommon.BaseMutationOptions<LikePostMutation, LikePostMutationVariables>;
export const PublishMutationDocument = gql`
    mutation publishMutation($id: ID!) {
  publish(id: $id) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export type PublishMutationMutationFn = ApolloReactCommon.MutationFunction<PublishMutationMutation, PublishMutationMutationVariables>;
export type PublishMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<PublishMutationMutation, PublishMutationMutationVariables>, 'mutation'>;

    export const PublishMutationComponent = (props: PublishMutationComponentProps) => (
      <ApolloReactComponents.Mutation<PublishMutationMutation, PublishMutationMutationVariables> mutation={PublishMutationDocument} {...props} />
    );
    
export type PublishMutationMutationResult = ApolloReactCommon.MutationResult<PublishMutationMutation>;
export type PublishMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<PublishMutationMutation, PublishMutationMutationVariables>;
export const SignupUserMutationDocument = gql`
    mutation signupUserMutation($name: String!, $email: String!) {
  signupUser(data: {name: $name, email: $email}) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type SignupUserMutationMutationFn = ApolloReactCommon.MutationFunction<SignupUserMutationMutation, SignupUserMutationMutationVariables>;
export type SignupUserMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignupUserMutationMutation, SignupUserMutationMutationVariables>, 'mutation'>;

    export const SignupUserMutationComponent = (props: SignupUserMutationComponentProps) => (
      <ApolloReactComponents.Mutation<SignupUserMutationMutation, SignupUserMutationMutationVariables> mutation={SignupUserMutationDocument} {...props} />
    );
    
export type SignupUserMutationMutationResult = ApolloReactCommon.MutationResult<SignupUserMutationMutation>;
export type SignupUserMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupUserMutationMutation, SignupUserMutationMutationVariables>;
export const FeedQueryDocument = gql`
    query feedQuery($published: Boolean) {
  feed(published: $published) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export type FeedQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FeedQueryQuery, FeedQueryQueryVariables>, 'query'>;

    export const FeedQueryComponent = (props: FeedQueryComponentProps) => (
      <ApolloReactComponents.Query<FeedQueryQuery, FeedQueryQueryVariables> query={FeedQueryDocument} {...props} />
    );
    
export type FeedQueryQueryResult = ApolloReactCommon.QueryResult<FeedQueryQuery, FeedQueryQueryVariables>;
export const PostQueryDocument = gql`
    query postQuery($id: ID!) {
  post(where: {id: $id}) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export type PostQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostQueryQuery, PostQueryQueryVariables>, 'query'> & ({ variables: PostQueryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PostQueryComponent = (props: PostQueryComponentProps) => (
      <ApolloReactComponents.Query<PostQueryQuery, PostQueryQueryVariables> query={PostQueryDocument} {...props} />
    );
    
export type PostQueryQueryResult = ApolloReactCommon.QueryResult<PostQueryQuery, PostQueryQueryVariables>;
export const UsersQueryDocument = gql`
    query usersQuery {
  users {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type UsersQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UsersQueryQuery, UsersQueryQueryVariables>, 'query'>;

    export const UsersQueryComponent = (props: UsersQueryComponentProps) => (
      <ApolloReactComponents.Query<UsersQueryQuery, UsersQueryQueryVariables> query={UsersQueryDocument} {...props} />
    );
    
export type UsersQueryQueryResult = ApolloReactCommon.QueryResult<UsersQueryQuery, UsersQueryQueryVariables>;