import users from "../database/data";
import jwt from "jsonwebtoken";

const listUserService = (token) => {
  token = token.split(" ")[1];

  const tokenDecoded = jwt.decode(token);

  const user = users.find((elem) => elem.uuid === tokenDecoded.uuid);

  if (!user) {
    return "User not find";
  }

  return {
    email: user.email,
    name: user.name,
    isAdm: user.isAdm,
    createdOn: user.createdOn,
    updatedOn: user.updatedOn,
    uuid: user.uuid,
  };
};

export default listUserService;
