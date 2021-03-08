const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();

// router.use(bodyParser.json);

const meal = require('../models/meal');

// READ
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

// CREATE
router.post('/', (req, res) => {
    const data = req.body;
    const newMeal = meal.create(data);
    res.status(201).send(newMeal);
});

// DELETE
router.delete('/:id', (req, res) => {
    const mealId = parseInt(req.params.id);
    const mealDelete = meal.findById(mealId);
    mealDelete.destroy();
    res.status(204).send(mealDelete);
});

// UPDATE
router.put('/:id', (req, res) => {
    const mealId = parseInt(req.params.id);
    const mealUpdate = meal.findById(mealId);
    const update = req.body;
    console.log(update);
    mealUpdate.update(update);
    res.send(mealUpdate);
})

router.patch('/:id', (req, res) => {
    const mealId = parseInt(req.params.id);
    const mealUpdate = meal.findById(mealId);
    const update = req.body;
    console.log(update);
    mealUpdate.update(update);
    res.send(mealUpdate);
})

module.exports = router;