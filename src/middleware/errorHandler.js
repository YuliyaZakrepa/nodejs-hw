import {HttpError} from 'http-errors';
const errorHandler = (err, req, res, next)=>{
  if (err instanceof HttpError){
     return res.status(err.status).json({
      message: err.message || err.name,
    });
  }
  const isProduction = process.env.NODE_ENV==='production';
  const message = isProduction ?"Something went wrong" :err.message;
  res.status(500).json({message});
};
export default errorHandler;
