const express = require('express');
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const router = express.Router();


const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'API Simples com Swagger',
          version: '1.0.0',
          description: 'Exemplo básico de documentação Swagger com Express',
        },
        components: {
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT', // opcional, mas deixa claro que é JWT
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
      apis: [__dirname + '/routes/*.js'],

  };
  
const swaggerSpec = swaggerJsDoc(swaggerOptions);
  
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router
