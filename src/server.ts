import 'reflect-metadata';
import Koa from 'koa';
import { createConnection } from 'typeorm';
import { router as web } from './routes/web';

export const app = new Koa();

// Application Routes.
app.use(web.routes());

// After Middlewares
app.use(web.allowedMethods());

// Connect to the database.
createConnection().then(async () => {
    app.listen(3000);
    console.log('app is listenning on port 3000...');
}).catch((err: any) => {
    if (process.env.APP_ENV === "testing" || process.env.APP_ENV === "local") {
        console.log("Database Connection failed!", err);
    } else {
        console.log("Database Connection failed!");
    }
});
