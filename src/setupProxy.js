import { createProxyMiddleware } from 'http-proxy-middleware';
     
module.exports = function(app) {
    try{
        app.use(
            '/api',
            proxy({
              target: 'http://localhost:5000',
              changeOrigin: true
            })
          )
     }
     catch(err){
        console.log(err.message);
     }
    }