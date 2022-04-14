import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const diningHallQuery = 'SELECT * FROM hall_hours';

const router = express.Router();