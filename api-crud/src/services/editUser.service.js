import users from "../database/data";
import jwt from "jsonwebtoken";
import * as bcyrpt from "bcryptjs";

const editUserService = async (uuid, name, email, password, token) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const updatedOn = today.toISOString();

  token = token.split(" ")[1];

  const decodedToken = jwt.decode(token);

  const userRequest = users.find((elem) => elem.uuid === decodedToken.uuid);

  if (userRequest.uuid !== uuid && userRequest.isAdm === false) {
    return { res: { message: "Authorization Denied" }, status: 401 };
  }

  const userUpdated = users.find((elem) => elem.uuid === uuid);
  const userUpdatedIndex = users.findIndex((elem) => elem.uuid === uuid);

  const updatedUser = {
    name: name ? name : userUpdated.name,
    email: email ? email : userUpdated.email,
    password: password ? await bcyrpt.hash(password, 10) : userUpdated.password,
    createdOn: users[userUpdatedIndex].createdOn,
    updatedOn,
    uuid: users[userUpdatedIndex].uuid,
    isAdm: users[userUpdatedIndex].isAdm,
  };

  users[userUpdatedIndex] = { ...users[userUpdatedIndex], ...updatedUser };

  return {
    res: {
      name: updatedUser.name,
      email: updatedUser.email,
      createdOn: updatedUser.createdOn,
      updatedOn: updatedUser.updatedOn,
      uuid: updatedUser.uuid,
      isAdm: updatedUser.isAdm,
    },
    status: 200,
  };
};

export default editUserService;
