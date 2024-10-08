import userLoginService from "../services/userLogin.service";

const userLoginController = (req, res) => {
  const { email, password } = req.body;

  const response = userLoginService(email, password);

  return res.status(response.status).json(response.res);
};

export default userLoginController;
