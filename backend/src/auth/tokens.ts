import {SignJWT,jwtVerify} from "jose";
import {env} from "../config/env.js";
const accessSecret=new TextEncoder().encode(env.JWT_ACCESS_SECRET);
const refreshSecret=new TextEncoder().encode(env.JWT_REFRESH_SECRET);
export type UserRole="USER"|"BUSINESS"|"ADMIN";
export type AuthClaims={sub:string;role:UserRole;type:"access"|"refresh"};
function validRole(x:unknown):x is UserRole{return x==="USER"||x==="BUSINESS"||x==="ADMIN";}
export async function signAccessToken(userId:string,role:UserRole){return new SignJWT({role,type:"access"}).setProtectedHeader({alg:"HS256"}).setSubject(userId).setIssuedAt().setExpirationTime(env.ACCESS_TOKEN_TTL).sign(accessSecret);}
export async function signRefreshToken(userId:string,role:UserRole,tokenId:string){return new SignJWT({role,type:"refresh",tokenId}).setProtectedHeader({alg:"HS256"}).setSubject(userId).setIssuedAt().setExpirationTime(env.REFRESH_TOKEN_TTL).sign(refreshSecret);}
export async function verifyAccessToken(token:string):Promise<AuthClaims>{const {payload}=await jwtVerify(token,accessSecret);if(payload.type!=="access"||typeof payload.sub!=="string"||!validRole(payload.role))throw new Error("INVALID_ACCESS_TOKEN");return {sub:payload.sub,role:payload.role,type:"access"};}
export async function verifyRefreshToken(token:string):Promise<AuthClaims&{tokenId:string}>{const {payload}=await jwtVerify(token,refreshSecret);if(payload.type!=="refresh"||typeof payload.sub!=="string"||typeof payload.tokenId!=="string"||!validRole(payload.role))throw new Error("INVALID_REFRESH_TOKEN");return {sub:payload.sub,role:payload.role,type:"refresh",tokenId:payload.tokenId};}
