# @intelika/swagger-theme

[![npm version](https://badge.fury.io/js/%40intelika%2Fswagger-theme.svg)](https://badge.fury.io/js/%40intelika%2Fswagger-theme)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a theme for [Swagger UI]() (JavaScript/TypeScript/NestJS) that provides a clean and modern look for your API documentation.
It can also be used for other languages that swagger supports as well. See [Other languages](#others)

![image](https://github.com/intelika-ai/intelika-swagger-theme/assets/66132114/0bf7f819-660d-4c81-a790-e85957c2c4a8)



## Table of Contents

- [@intelika/swagger-theme](#intelikaswagger-theme)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [NestJS](#nestjs)
    - [JavaScript](#javascript)
    - [TypeScript](#typescript)
  - [Contributing](#contributing)
  - [License](#license)
 
## Installation

Use the package manager of your choice to install the package:

npm
```bash
npm install --save @intelika/swagger-theme
```

pnpm
```bash
pnpm add @intelika/swagger-theme
```

yarn
```bash
yarn add @intelika/swagger-theme
```

##  Usage
 This section provides information on how to use the Swagger theme package. It includes instructions, examples, and guidelines for integrating the theme into your project.

### NestJS
```typescript
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { getThemeSync } from '@intelika/swagger-theme';

export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Hello World')
    .setDescription('A sample API')
    .setVersion('1.0.0')
    .addServer('http://localhost:3000/api/v1')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document, {
    customCss: getThemeSync().toString()   // In custom css we will add the theme
  });
}

function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  await app.listen(3000);
}
```



### JavaScript
```javascript
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');

const { getThemeSync } = require('@intelika/swagger-theme');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
      description: 'A sample API'
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1'
      }
    ]
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(options);

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
  customCss: getThemeSync().toString()   // In custom css we will add the theme
}));

app.listen(3000);
```

### TypeScript
```typescript
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

import { getThemeSync } from '@intelika/swagger-theme';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
      description: 'A sample API'
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1'
      }
    ]
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(options);

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
  customCss: getThemeSync().toString()   // In custom css we will add the theme
}));

app.listen(3000);
```


### Others
Other logics

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
