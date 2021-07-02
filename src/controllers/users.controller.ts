import UsersModel, { User } from "../models/users.model";
import { Response, Request, NextFunction } from "express";
import { adminUser } from "../common/constants";

export default class UsersController {
  static getUsersWithPaging = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { limit, offset, textSearch = "" } = req.query;
    if (limit && offset) {
      const result = await UsersModel.getUsers(+limit, +offset, textSearch.toString());
      return res.json({ result });
    }
    const result = await UsersModel.getAllUsers(textSearch.toString())
    return res.json({result});
  };

  static getUser: (id: string) => {};

  static deleteUser: (id: string) => {};

  static moveToTrash = async (req:Request, res: Response) => {
    const { id } = req.params;
    const result = await UsersModel.moveToTrash(id);
    res.json(result);
  };

  static updateUser = async (req: Request, res: Response) => {
    const { user, id } = req.body;
    const result = await UsersModel.updateUser(user, id);
    return res.json(result);
  };

  static insertUser = async (req: Request, res: Response) => {
    const { user }: { user: User } = req.body;
    const insertUser = { ...user };
    insertUser.created_by = adminUser;
    insertUser.created_time = new Date().getTime();
    let result = await UsersModel.insertUser(insertUser);
    res.json({ user: insertUser, result });
  };

  static blockUser = async (req: Request, res: Response) => {
    const result = await UsersModel.blockUser(req.params.id);
    return res.json(result);
  }

  //trash controller

  static deleteUsers = async (req: Request, res: Response) => {
    const { ids } = req.body;
    const result = await UsersModel.deleteUsers(ids);
    res.json(result);
  }

  static getUserDeletedWithPaging = async (req: Request, res: Response) => {
    const { limit, offset, textSearch } = req.query;
    return res.json(req.query);
  }
}
