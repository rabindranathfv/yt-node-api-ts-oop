import App from "./app";
import BaseRoute from "./routes/base.routes";
import UserRoute from "./routes/user.routes";

const app = new App([new BaseRoute(), new UserRoute()]);

app.listen();
