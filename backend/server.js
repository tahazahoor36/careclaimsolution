'use strict';

require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[CarePoint API] Server running on port ${PORT}`);
  console.log(`[CarePoint API] Environment: ${process.env.NODE_ENV || 'development'}`);
});
