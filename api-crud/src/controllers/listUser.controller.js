import listUserService from "../services/listUser.service";

const listUserController = (req, res) => {
  let token = req.headers.authorization;
  const user = listUserService(token);

  return res.json(user);
};

export default listUserController;
