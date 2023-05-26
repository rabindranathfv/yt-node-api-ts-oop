import App from './app';
import BaseRoute from './routes/base.routes';
import CustomerRoute from './routes/customer.routes';
import TestimonialRoute from './routes/testimonial.routes';
import TestimonialUsageRoute from './routes/testimonial-usage.routes';
import UserRoute from './routes/user.routes';
import AuthRoutes from './routes/auth.routes';

const app = new App([
  new BaseRoute(),
  new UserRoute(),
  new CustomerRoute(),
  new TestimonialRoute(),
  new TestimonialUsageRoute(),
  new AuthRoutes(),
]);

app.listen();
