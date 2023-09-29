// src/server.ts
import express from 'express';
import mongoose from 'mongoose';
import router from './router';
import variable from './variable';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json(),router);
mongoose.connect(variable.dbUrl)
      .then(() => {
        console.log("connected");
        app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
        });
      })
      .catch((e) => {
        console.log("failed to connect"+e);
      })

