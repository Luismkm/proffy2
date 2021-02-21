import { Request, Response, NextFunction } from "express";
import { verify } from '../utils/jwt'

const extractToken = (req: Request) => {
  const authorization = req.headers.authorization || ''
  return authorization.replace('Bearer ', '')
}

const handleError = (error: any) => {
  console.error('Failed to verify token', error)
  return Promise.reject({
    status: 401,
    message: 'Invalid authentication token',
    code: 'UNAUTHENTICATED',
  })
}

export default async function authenticated(req: Request, res: Response, next: NextFunction) {
  const token = extractToken(req)
  return await verify(token)
    .catch(handleError)
    .then(data => next())
}