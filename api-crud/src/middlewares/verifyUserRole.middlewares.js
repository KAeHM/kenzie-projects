import users from "../database/data";
import jwt from "jsonwebtoken";

const verifyUserRoleMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  token = token.split(" ")[1];

  const teste = jwt.decode(token);

  if (!teste.uuid) {
    return "Token Inválido";
  }

  const user = users.find((elem) => teste.uuid === elem.uuid);

  if (!user.isAdm) {
    return res.status(401).json({ message: "Authorization Denied" });
  }

  next();
};

export default verifyUserRoleMiddleware;
