import { nexusPrismaPlugin } from "@generated/nexus-prisma";
import { Photon } from "@generated/photon";
import { idArg, makeSchema, objectType, stringArg, booleanArg } from "nexus";
import { GraphQLServer } from "graphql-yoga";
import { join } from "path";
import { Context } from "./types";

const photon = new Photon();

const nexusPrisma = nexusPrismaPlugin({
  photon: (ctx: Context) => ctx.photon
});

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.posts({
      pagination: false
    });
  }
});

const Like = objectType({
  name: "Like",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.post();
  }
});

const Post = objectType({
  name: "Post",
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.title();
    t.model.content();
    t.model.published();
    t.model.author();
    t.model.likes();
  }
});

const Query = objectType({
  name: "Query",
  definition(t) {
    t.crud.post({
      alias: "post"
    });

    t.list.field("users", {
      type: "User",
      resolve: (parent, args, ctx) => {
        return ctx.photon.users.findMany({});
      }
    });

    t.list.field("feed", {
      type: "Post",
      args: {
        published: booleanArg()
      },
      resolve: (_, { published }, ctx) => {
        return ctx.photon.posts.findMany({
          where: { published }
        });
      }
    });

    t.list.field("filterPosts", {
      type: "Post",
      args: {
        searchString: stringArg({ nullable: true })
      },
      resolve: (_, { searchString }, ctx) => {
        return ctx.photon.posts.findMany({
          where: {
            OR: [
              { title: { contains: searchString } },
              { content: { contains: searchString } }
            ]
          }
        });
      }
    });
  }
});

const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.crud.createOneUser({ alias: "signupUser" });
    t.crud.deleteOnePost();

    t.field("like", {
      type: "Like",
      args: {
        authorEmail: stringArg(),
        postID: stringArg()
      },
      resolve: (_, { authorEmail, postID }, ctx) => {
        return ctx.photon.likes.create({
          data: {
            post: { connect: { id: postID } },
            user: {
              connect: { email: authorEmail }
            }
          }
        });
      }
    });

    t.field("createDraft", {
      type: "Post",
      args: {
        title: stringArg(),
        content: stringArg({ nullable: true }),
        authorEmail: stringArg()
      },
      resolve: (_, { title, content, authorEmail }, ctx) => {
        return ctx.photon.posts.create({
          data: {
            title,
            content,
            published: false,
            author: {
              connect: { email: authorEmail }
            }
          }
        });
      }
    });

    t.field("publish", {
      type: "Post",
      nullable: true,
      args: {
        id: idArg()
      },
      resolve: (_, { id }, ctx) => {
        return ctx.photon.posts.update({
          where: { id },
          data: { published: true }
        });
      }
    });
  }
});

const schema = makeSchema({
  types: [Query, Mutation, Post, User, Like, nexusPrisma],
  outputs: {
    typegen: join(__dirname, "../generated/nexus-typegen.ts"),
    schema: join(__dirname, "/schema.graphql")
  },
  typegenAutoConfig: {
    sources: [
      {
        source: "@generated/photon",
        alias: "photon"
      },
      {
        source: join(__dirname, "types.ts"),
        alias: "ctx"
      }
    ],
    contextType: "ctx.Context"
  }
});

const server = new GraphQLServer({
  schema,
  context: { photon }
});

server.start(
  {
    endpoint: "/graphql",
    playground: "/graphql",
    subscriptions: false,
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql#6-using-the-graphql-api`
    )
);
