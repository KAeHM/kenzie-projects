import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (req, res) => {
  const { uuid } = req.params;
  let token = req.headers.authorization;

  const user = deleteUserService(uuid, token);

  return res.status(user.status).json(user.res);
};

export default deleteUserController;
