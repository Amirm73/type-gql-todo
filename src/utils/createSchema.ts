import { buildSchema } from "type-graphql";
import { ChangePasswordResolver } from "../modules/user/ChangePassword";
import { MeResolver } from "../modules/user/Me";
import { ConfirmUserResolver } from "../modules/user/ConfirmUser";
import { ForgotPasswordResolver } from "../modules/user/ForgotPassword";
import { LoginResolver } from "../modules/user/Login";
import { LogoutResolver } from "../modules/user/Logout";
import { CreateUserResolver } from "../modules/user/CreateUser";
import { PictrureUoloadResolver } from "../modules/user/ProfilePicture";
import { GetAllTodosResolver } from "../modules/todo/GetAllTodos";
import { UpdateTodoResolver } from "../modules/todo/UpdateTodo";
import { GetTodoResolver } from "../modules/todo/GetTodo";
import { DeleteTodoResolver } from "../modules/todo/DeleteTodo";
import { CreateTagResolver } from "../modules/tag/CreateTag";
import { UpdateTagResolver } from "../modules/tag/UpdateTag";
import { CreateTodoResolver } from "../modules/todo/CreateTodo";
import { DeleteTagResolver } from "../modules/tag/DeleteTag";
import { AssignTodoTagResolver } from "../modules/todo/AssignTodoTag";
import { UpdateTodoTagResolver } from "../modules/todo/UpdateTodoTags";
import { BulkAssignTagsResolver } from "../modules/todo/BulkAssignTags";
import { GetAllUsersResolver } from "../modules/user/GetAllUsers";
import { TodoTagResolver } from "../modules/todo/tagsResolver";

export const createSchema = () =>
  buildSchema({
    resolvers: [
      ChangePasswordResolver,
      ConfirmUserResolver,
      MeResolver,
      ForgotPasswordResolver,
      LoginResolver,
      LogoutResolver,
      PictrureUoloadResolver,
      GetAllTodosResolver,
      UpdateTodoResolver,
      CreateTodoResolver,
      UpdateTodoResolver,
      GetAllTodosResolver,
      GetTodoResolver,
      DeleteTodoResolver,
      CreateTagResolver,
      UpdateTagResolver,
      DeleteTagResolver,
      AssignTodoTagResolver,
      UpdateTodoTagResolver,
      BulkAssignTagsResolver,
      CreateUserResolver,
      GetAllUsersResolver,
      TodoTagResolver
    ],
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId;
    }
  });
