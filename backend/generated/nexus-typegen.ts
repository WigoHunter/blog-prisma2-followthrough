/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as ctx from "../src/types"
import * as photon from "@generated/photon"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  LikeCreateManyWithoutLikesInput: { // input type
    connect?: NexusGenInputs['LikeWhereUniqueInput'][] | null; // [LikeWhereUniqueInput!]
    create?: NexusGenInputs['LikeCreateWithoutPostInput'][] | null; // [LikeCreateWithoutPostInput!]
  }
  LikeCreateOneWithoutLikeInput: { // input type
    connect?: NexusGenInputs['LikeWhereUniqueInput'] | null; // LikeWhereUniqueInput
    create?: NexusGenInputs['LikeCreateWithoutUserInput'] | null; // LikeCreateWithoutUserInput
  }
  LikeCreateWithoutPostInput: { // input type
    id?: string | null; // ID
    user: NexusGenInputs['UserCreateOneWithoutUserInput']; // UserCreateOneWithoutUserInput!
  }
  LikeCreateWithoutUserInput: { // input type
    id?: string | null; // ID
    post: NexusGenInputs['PostCreateOneWithoutPostInput']; // PostCreateOneWithoutPostInput!
  }
  LikeWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  PostCreateManyWithoutPostsInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    create?: NexusGenInputs['PostCreateWithoutAuthorInput'][] | null; // [PostCreateWithoutAuthorInput!]
  }
  PostCreateOneWithoutPostInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
    create?: NexusGenInputs['PostCreateWithoutLikesInput'] | null; // PostCreateWithoutLikesInput
  }
  PostCreateWithoutAuthorInput: { // input type
    content?: string | null; // String
    createdAt?: any | null; // DateTime
    id?: string | null; // ID
    likes?: NexusGenInputs['LikeCreateManyWithoutLikesInput'] | null; // LikeCreateManyWithoutLikesInput
    published?: boolean | null; // Boolean
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  PostCreateWithoutLikesInput: { // input type
    author?: NexusGenInputs['UserCreateOneWithoutAuthorInput'] | null; // UserCreateOneWithoutAuthorInput
    content?: string | null; // String
    createdAt?: any | null; // DateTime
    id?: string | null; // ID
    published?: boolean | null; // Boolean
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  PostWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserCreateInput: { // input type
    email: string; // String!
    id?: string | null; // ID
    like?: NexusGenInputs['LikeCreateOneWithoutLikeInput'] | null; // LikeCreateOneWithoutLikeInput
    name?: string | null; // String
    posts?: NexusGenInputs['PostCreateManyWithoutPostsInput'] | null; // PostCreateManyWithoutPostsInput
  }
  UserCreateOneWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutPostsInput'] | null; // UserCreateWithoutPostsInput
  }
  UserCreateOneWithoutUserInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutLikeInput'] | null; // UserCreateWithoutLikeInput
  }
  UserCreateWithoutLikeInput: { // input type
    email: string; // String!
    id?: string | null; // ID
    name?: string | null; // String
    posts?: NexusGenInputs['PostCreateManyWithoutPostsInput'] | null; // PostCreateManyWithoutPostsInput
  }
  UserCreateWithoutPostsInput: { // input type
    email: string; // String!
    id?: string | null; // ID
    like?: NexusGenInputs['LikeCreateOneWithoutLikeInput'] | null; // LikeCreateOneWithoutLikeInput
    name?: string | null; // String
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Like: photon.Like;
  Mutation: {};
  Post: photon.Post;
  Query: {};
  User: photon.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  LikeCreateManyWithoutLikesInput: NexusGenInputs['LikeCreateManyWithoutLikesInput'];
  LikeCreateOneWithoutLikeInput: NexusGenInputs['LikeCreateOneWithoutLikeInput'];
  LikeCreateWithoutPostInput: NexusGenInputs['LikeCreateWithoutPostInput'];
  LikeCreateWithoutUserInput: NexusGenInputs['LikeCreateWithoutUserInput'];
  LikeWhereUniqueInput: NexusGenInputs['LikeWhereUniqueInput'];
  PostCreateManyWithoutPostsInput: NexusGenInputs['PostCreateManyWithoutPostsInput'];
  PostCreateOneWithoutPostInput: NexusGenInputs['PostCreateOneWithoutPostInput'];
  PostCreateWithoutAuthorInput: NexusGenInputs['PostCreateWithoutAuthorInput'];
  PostCreateWithoutLikesInput: NexusGenInputs['PostCreateWithoutLikesInput'];
  PostWhereUniqueInput: NexusGenInputs['PostWhereUniqueInput'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserCreateOneWithoutAuthorInput: NexusGenInputs['UserCreateOneWithoutAuthorInput'];
  UserCreateOneWithoutUserInput: NexusGenInputs['UserCreateOneWithoutUserInput'];
  UserCreateWithoutLikeInput: NexusGenInputs['UserCreateWithoutLikeInput'];
  UserCreateWithoutPostsInput: NexusGenInputs['UserCreateWithoutPostsInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  Like: { // field return type
    id: string; // ID!
    post: NexusGenRootTypes['Post']; // Post!
    user: NexusGenRootTypes['User']; // User!
  }
  Mutation: { // field return type
    createDraft: NexusGenRootTypes['Post']; // Post!
    deleteOnePost: NexusGenRootTypes['Post'] | null; // Post
    like: NexusGenRootTypes['Like']; // Like!
    publish: NexusGenRootTypes['Post'] | null; // Post
    signupUser: NexusGenRootTypes['User']; // User!
  }
  Post: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    content: string | null; // String
    createdAt: any; // DateTime!
    id: string; // ID!
    likes: NexusGenRootTypes['Like'][] | null; // [Like!]
    published: boolean; // Boolean!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Post'][]; // [Post!]!
    filterPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    post: NexusGenRootTypes['Post'] | null; // Post
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    email: string; // String!
    id: string; // ID!
    name: string | null; // String
    posts: NexusGenRootTypes['Post'][] | null; // [Post!]
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createDraft: { // args
      authorEmail?: string | null; // String
      content?: string | null; // String
      title?: string | null; // String
    }
    deleteOnePost: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    like: { // args
      authorEmail?: string | null; // String
      postID?: string | null; // String
    }
    publish: { // args
      id?: string | null; // ID
    }
    signupUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
  }
  Post: {
    likes: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Query: {
    feed: { // args
      published?: boolean | null; // Boolean
    }
    filterPosts: { // args
      searchString?: string | null; // String
    }
    post: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
  }
  User: {
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Like" | "Mutation" | "Post" | "Query" | "User";

export type NexusGenInputNames = "LikeCreateManyWithoutLikesInput" | "LikeCreateOneWithoutLikeInput" | "LikeCreateWithoutPostInput" | "LikeCreateWithoutUserInput" | "LikeWhereUniqueInput" | "PostCreateManyWithoutPostsInput" | "PostCreateOneWithoutPostInput" | "PostCreateWithoutAuthorInput" | "PostCreateWithoutLikesInput" | "PostWhereUniqueInput" | "UserCreateInput" | "UserCreateOneWithoutAuthorInput" | "UserCreateOneWithoutUserInput" | "UserCreateWithoutLikeInput" | "UserCreateWithoutPostsInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}