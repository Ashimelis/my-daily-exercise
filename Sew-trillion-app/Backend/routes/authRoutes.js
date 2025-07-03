import express from 'express'
import { ConnectToDatabase } from '../lib/db.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



const router = express.Router()
router.post('/login', async (req, res) => {

    const { email, password} = req.body;
    try {
        const db = await ConnectToDatabase()
        const [rows] = await db.query('SELECT * FROM users WHERE email = ? ', [email])
            if (rows.length > 0) {
                return res.status(404).json({message : "user not existed "})
            }
            const isMatch = await bcrypt.compare( password, rows[0]. password)
            if(!isMatch){
              return res.status(401).json({message : "wrong password "})  

            }
            const token = jwt.sign({id:rows[0].id}, process.env.JWT_KEY, {expiresIn: '3h'})
             res.status(201).json({token:token})

    } catch (err) {
        res.status(500).json(err)

    }
})

export default router;