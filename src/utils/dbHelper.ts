export default class DBHelper {
  static obj2InsertQuery<T>(obj: T, tableName: string): string {
    let into = "";
    let value = "";
    for (let key in obj) {
      into += key + ",";
      if (typeof obj[key] === "string") value += `'${obj[key]}',`;
      else value += obj[key] + ",";
    }

    let query = `insert into ${tableName} (${into}) values(${value})`;
    return query;
  }
}
