import Router from 'koa-router';
import { createReadStream } from 'fs';

export const router = new Router;

router.get('/shortner', async (ctx: any) => {

    // Serve an html form.
    ctx.type = 'html';
    ctx.body = createReadStream(__dirname + '/../public/form.html');
    ctx.status = 200;
  
});

router.post('/shortner/create', async (ctx: any) => {
    // @todo store a record in the database.
    
    ctx.body = 'TEST';
    ctx.status = 200;
});

