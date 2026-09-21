import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import rateLimit from "@fastify/rate-limit";
import {env} from "./config/env.js";
export function buildApp(){const app=Fastify({logger:true,bodyLimit:1000000});void app.register(helmet);void app.register(cors,{origin:env.CORS_ORIGIN,credentials:true});void app.register(rateLimit,{max:100,timeWindow:"1 minute"});app.get("/health",async()=>({status:"ok",service:"nexa-api"}));app.setErrorHandler((error,request,reply)=>{request.log.error({err:error},"request failed");return reply.status(error.statusCode??500).send({error:{code:error.statusCode?"REQUEST_ERROR":"INTERNAL_ERROR",message:error.statusCode?error.message:"Erro interno."}})});return app;}
