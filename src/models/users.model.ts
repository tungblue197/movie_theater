
import { knex } from "../db";

export default class UsersModel {
  public static getUsers = async (
    limit: number,
    offset: number,
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
    } catch (error) {
      return error;
    }
  };


  public static getAllUsers = async (textSearch: string) => {
    try {
      const result =  await knex('users');
      const count_result = await knex('users').count();
      return ({
        data: result,
        total: +count_result[0].count
      });
    } catch (error) {
      return error;
    }
  };


  public static insertUser = async (user: User) => {
    try {
      user.created_time = 10;
      const result = await knex.insert(user).table("users").returning("id");
      const total = await knex
        .count()
        .table("users")
        .where("deleted", "=", false);
      return { data: result.toString(), total: +total[0].count };
    } catch (error) {
      return error;
    }
  };


  public static updateUser = async (user: User, id: string) => {
    try {
      const result = await knex("users").where("id", '=', id).update(user).returning('id');
      return result;
    } catch (error) {
      return error;
    }
  };

  public static moveToTrash = async (id: string) => {
    try {
      const result = await knex('users').where('id', '=', id).update({ deleted: true }).returning('id');
      return result[0];
    } catch (error) {
      return error;
    }
   
  }

  public static deleteUsers = async (ids: string[]) => {
    try {
      const result = await knex('users').whereIn('id', ids).del().returning('id');
      return result;
    } catch (error) {
      return error;
    }
  }

  public static blockUser = async (id: string) => {
    try{
      const result = await knex('users').where('id', '=', id).update({ blocked: true }).returning('id');
      return result[0];
    }catch(error){
      return error;
    }

  }
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
  blocked?:boolean;
};
