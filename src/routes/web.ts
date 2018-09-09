import Router from 'koa-router';
import fs from 'fs';
import path from 'path';
import { Url } from '../entities/Url';

export const router = new Router;

router.get('/assets/:folder/:file', async (ctx: any, next: any) => {
    const file = ctx.params.file;
    const folder = ctx.params.folder;
    const ext = path.extname(file);
    let contentType: any;
    
    switch (ext)
    {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        default:
            ctx.throw(404);
            break;
    }

    ctx.type = contentType;
    ctx.body = fs.createReadStream(__dirname + '/../public/assets/'+folder+'/'+file);
    ctx.status = 200;
    next();
});

router.get('/shortner', async (ctx: any) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream(__dirname + '/../public/form.html');
    ctx.status = 200;
});

router.post('/shortner/create', async (ctx: any, next: any) => {
    let url: Url = new Url;

    url.originalUrl = ctx.request.body;
    url.shortUrl = Math.random().toString(36).slice(5);
   
    try {
        url.save();
    } catch (err) {
        console.log('could not save shortned url!');
    }

    await ctx.redirect('/shortner');
    next();
});

router.get('/:url', async (ctx: any, next: any) => {
    // @todo redirect the user to the original url from the database.


    
    // ctx.redirect()
    next();
});

