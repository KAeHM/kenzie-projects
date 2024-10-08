import users from "../database/data.js";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const createdOn = today.toISOString();
  const updatedOn = today.toISOString();

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    email,
    name,
    password: hashedPassword,
    isAdm,
    createdOn,
    updatedOn,
    uuid: uuidv4(),
  };

  users.push(newUser);

  return { email, name, isAdm, createdOn, updatedOn, uuid: uuidv4() };
};

export default createUserService;
