const menuData = require('../data');

class Meal {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
    }

    static get all() {
        const menu = menuData.map((meal) => new Meal(meal));
        return menu;
    }

    static findById(id) {
        try {
            const mealData = menuData.filter((meal) => meal.id === id)[0];
            const meal = new Meal(mealData);
            return meal;
        } catch (err) {
            throw new Error('No meal is assigned to that ID.');
        }
    }

    static create(meal) {
        const newMealId = menuData.length + 1;
        const newMeal = new Meal({ id: newMealId, ...meal });
        menuData.push(newMeal);
        return newMeal;
    }

    destroy() {
        const meal = menuData.filter((meal) => meal.id === this.id)[0];
        menuData.splice(menuData.indexOf(meal), 1);
    }

    updatePrice(price) {
        this.price = price;
    }
}

module.exports = Meal;