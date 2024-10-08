import users from "../database/data";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = (email, password) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    return { res: { message: "Email ou senha inválidos" }, status: 401 };
  }

  const checkPassword = bcrypt.compareSync(password, user.password);

  if (!checkPassword) {
    return { res: { message: "Email ou senha inválidos" }, status: 401 };
  }

  const token = jwt.sign({ uuid: user.uuid }, "SECRET_KEY", {
    expiresIn: "24h",
  });

  return { res: { token: token }, status: 200 };
};

export default userLoginService;
