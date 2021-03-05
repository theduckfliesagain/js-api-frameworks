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
            throw new Error('That meal does not exist!');
        }
    }

    static create(meal) {
        const newMealId = menuData.length + 1;
        const newmeal = new Meal({ id: newMealId, ...meal });
        menuData.push(newMeal);
        return newMeal;
    }

    // destroy() {
    //     const cat = catsData.filter((cat) => cat.id === this.id)[0];
    //     catsData.splice(catsData.indexOf(cat), 1);
    // }
}

module.exports = Cat;