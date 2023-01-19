import App from "./app";
import BaseRoute from "./routes/base.routes";

const app = new App([new BaseRoute()]);

app.listen();
