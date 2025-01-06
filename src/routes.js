import { Router } from "express";
import UserControler from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductController from "./app/controllers/ProductController";
import multer from "multer";
import multerConfig from './config/multer';
import authMiddleware from "./app/middlewares/auth";
import CategoryController from "./app/controllers/CategoryController ";
import OrderController from "./app/controllers/OrderController";

const routes = new Router()
const upload = multer(multerConfig);

routes.post('/users', UserControler.store);
routes.post('/session' , SessionController.store)

 routes.use(authMiddleware);
routes.post('/products', upload.single('file'), ProductController.store)
routes.get('/products',  ProductController.index);// faz um opload de apenas um arquivo , chama o nosso controler ]
routes.put('/products/:id', upload.single('file'), ProductController.update)

routes.post('/categories', upload.single('file'), CategoryController.store)
routes.get('/categories',  ProductController.index);
routes.put('/categories/:id', upload.single('file'), CategoryController.update)

routes.post('/orders', OrderController.store)
routes.get('/orders', OrderController.index)
routes.put('/orders/:id', OrderController.update)

export default routes


// request => middleware => controller => model => database => response 
//middleware :  Ele que faz a requisição 
// next : faz com a minha aplicação siga em frente 