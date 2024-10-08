import users from "../database/data";
import jwt from "jsonwebtoken";

const deleteUserService = (uuid, token) => {
  token = token.split(" ")[1];

  const decodedToken = jwt.decode(token);

  const userRequest = users.find((elem) => elem.uuid === decodedToken.uuid);

  if (userRequest.uuid !== uuid && userRequest.isAdm === false) {
    return { res: { message: "Authorization Denied" }, status: 401 };
  }

  const userIndex = users.findIndex((user) => user.uuid === uuid);

  if (userIndex === -1) {
    return { res: { message: "User not found" }, status: 401 };
  }

  users.splice(userIndex, 1);

  return { res: { message: "User Deleted" }, status: 200 };
};

export default deleteUserService;
