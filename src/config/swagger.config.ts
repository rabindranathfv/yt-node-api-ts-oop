import { SwaggerOptions } from 'swagger-ui-express';

export const swaggerOptions: SwaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Endpoints docs for Testimonials API',
      version: '1.0.0',
      descripcion: 'API Testimonials build in NODEJS WITH TYPESCRIPT',
    },
  },
  apis: ['./src/routes/*.routes.ts'],
};
