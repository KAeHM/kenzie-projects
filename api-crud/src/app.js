import express from "express";
import userRouter from "./routes/users.routes";
import loginRoute from "./routes/login.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRoute);

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});

export default app;
