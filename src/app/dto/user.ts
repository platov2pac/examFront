import {Role} from "./role";
import {Faculty} from "./faculty";

export interface User {
  id: number,
  login: string,
  fullName: string,
  password: string,
  role: Role
  faculty: Faculty
}
