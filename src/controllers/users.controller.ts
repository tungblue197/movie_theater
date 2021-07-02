import UsersModel, { User } from "../models/users.model";
import { Response, Request, NextFunction } from "express";
import { adminUser } from "../common/constants";
export default class UsersController {
  static getUsersWithPaging = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { limit, offset } = req.query;
    console.log({ params: req.params });
    if (limit && offset) {
      const result = await UsersModel.getUsers(+limit, +offset, 1, "");
      return res.json({ result });
    }
    return res.json({});
  };

  static getAllUsers: () => {};

  static getUser: (id: string) => {};

  static deleteUser: (id: string) => {};

  static moveToTrash: (id: string) => {};

  static updateUser = async (req: Request, res: Response) => {
    const { user } = req.body;
    const result = await UsersModel.updateUser(user);
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
}
