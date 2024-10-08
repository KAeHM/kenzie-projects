import users from "../database/data";

const verifyEmailAvaliability = (req, res, next) => {
  const { email } = req.body;

  const emailMatch = users.find((user) => user.email === email);

  if (emailMatch) {
    return res.status(400).json({ message: "Email already exist" });
  }

  next();
};

export default verifyEmailAvaliability;
