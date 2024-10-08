import listUsersService from "../services/listUsers.service";

const listUsersController = (req, res) => {
  const users = listUsersService();

  return res.status(200).json(users);
};

export default listUsersController;
