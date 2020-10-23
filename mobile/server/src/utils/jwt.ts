import jwt from 'jsonwebtoken'

const secret = '5ebe2294ecd0e0f08eab7690d2a6ee69'

export const sign = (payload: object) => jwt.sign(payload, secret, {expiresIn: '1h'})
export const verify = (token: string) => jwt.verify(token, secret)