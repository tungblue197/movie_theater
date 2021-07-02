import { adminUser } from "../common/constants";
import { pool } from "../db";
import DBHelper from "../utils/dbHelper";
import { knex } from "../db";

export default class UsersModel {
  public static getUsers = async (
    limit: number,
    offset: number,
    page: number,
    textSearch: string
  ) => {
    try {
      const data = await knex
        .select()
        .table("users")
        .limit(limit)
        .offset(offset);
      const total = await knex
        .count()
        .table("users")
        .where("deleted", "=", false);
      return { data, total: +total[0].count };
    } catch (e) {
      return e;
    }
  };
  public static getAllUsers = async () => {
    return;
  };
  public static insertUser = async (user: User) => {
    try {
      user.created_time = 10;
      const result = await knex.insert(user).table("users").returning("id");
      const total = await knex
        .count()
        .table("users")
        .where("deleted", "=", false);
      return { data: result.toString(), total: total[0].count };
    } catch (error) {
      return error;
    }
  };
  public static updateUser = async (user: User) => {
    try {
      const result = await knex.update(user).table("users").returning("id");
      console.log("result : ", result);
      return result;
    } catch (error) {
      return error;
    }
  };
}

export type User = {
  id?: string;
  created_by?: string;
  created_time?: number;
  modified_by?: string;
  modified_time?: number;
  full_name?: string;
  date_of_birth?: Date;
  address?: string;
  location?: string;
  gender?: number;
  email?: string;
  username?: string;
  password?: string;
  exp?: number;
  vip?: number;
};
