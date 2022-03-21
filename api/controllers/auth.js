require('dotenv').config()

const express = require('express');
const router = express.Router()

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const User = require('../models/models')


router.post('/register', async (req, res) => {
    try{
        const salt = await bcrypt.genSalt()
        const hashed = await bcrypt.hash(req.body.password, salt)
        await User.create({...req.body,password: hashed})
        res.status(201).json({msg: 'User created'})
    }catch {
        res.status(500).json(err)
    }
})

// router.post("/login", async (req, res) => {
//     try{
        
// })