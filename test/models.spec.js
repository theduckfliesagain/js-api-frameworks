const menuData = require('../data');
const Meal = require('../models/meal');

// const { CustomConsole } = require('@jest/console');

describe('Meal model', () => {
    const testMeal = {
        name: 'Curry',
        price: 15.00,
    };

    const updateMeal = {
        name: 'Curry',
        price: 10.00,
    };

    describe('Class Constructor', () => {
        it('should make an instance of a meal', () => {
            const meal = new Meal({id: 20, ...testMeal});
    
            expect(meal.id).toEqual(20);
            expect(meal.name).toEqual('Curry');
            expect(meal.price).toEqual(15.00);
        });

    })
    
    describe('CRUD functionality', () => {
        
        // READ      
        it('should return the menu', () => {
            const menu = Meal.all;
            expect(menu).toEqual(menuData);
        });

        it('should return an existing meal', () => {
            const meal = Meal.findById(1);
    
            expect(meal).toEqual(menuData[0]);
        });

        it('should throw an error if no meal', () => {
            function testError() {
                Meal.findById(50);
            }

            expect(testError).toThrowError('No meal is assigned to that ID.');
        });


         // CREATE

        it('should create a new meal', () => {
            const newMealId = menuData.length + 1;
            const newMeal = Meal.create(testMeal);
    
            expect(newMeal).toEqual({ id: newMealId, ...testMeal });
        });
        
         // UPADTE
        it('should update an existing meal price', () => {
            const mealToUpdateId = menuData.length;
            const mealToUpdate = menuData[mealToUpdateId - 1];

            mealToUpdate.updatePrice(10.00);

            expect(mealToUpdate).toEqual({ id: mealToUpdateId, ...updateMeal });

        });

        // DELETE
        it('should delete a menu item', () => {
            // Test the deletion of the last menu item
            const mealToDestroyId = menuData.length;
            const mealToDestroy = menuData[mealToDestroyId - 1];

            mealToDestroy.destroy();
    
            expect(mealToDestroy).toEqual({ id: mealToDestroyId, ...updateMeal });

            expect(menuData).not.toContain(mealToDestroy);
        });

    });
   


});