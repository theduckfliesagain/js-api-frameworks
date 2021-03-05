const express = require('express');
const router = express.Router();

const meal = require('../models/meal');

router.get('/', (req, res) => {
    const mealData = meal.all;
    res.send(mealData);
});

router.get('/:id', (req, res) => {
    try {
        const mealId = parseInt(req.params.id);
        const selectedMeal = meal.findById(mealId);
        res.send(selectedMeal);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const newMeal = meal.create(data);
    res.status(201).send(newMeal);
});

router.delete('/:id', (req, res) => {
    const mealId = parseInt(req.params.id);
    const mealDelete = meal.findById(mealId);
    mealDelete.destroy();
    res.status(204).send();
});

module.exports = router;