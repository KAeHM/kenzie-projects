import editUserService from "../services/editUser.service";

const editUserController = async (req, res) => {
  const { uuid } = req.params;
  const { email, name, password } = req.body;
  let token = req.headers.authorization;

  const user = await editUserService(uuid, name, email, password, token);

  return res.status(user.status).json(user.res);
};

export default editUserController;
