const Meal = require('../models/meal');
const menuData = require('../data');

describe('Meal model', () => {
    const testMeal = {
        name: 'Lasagna',
        price: 5,
    };
    
    describe('CRUD functionality', () => {
        // CREATE
        it('should make a new meal', () => {
            const meal = new Meal({id: 20, ...testMeal});
    
            expect(meal.id).toEqual(20);
            expect(meal.name).toEqual('Lasagna');
            expect(meal.price).toEqual(5);
        });
        // READ
        it('should return an existing meal', () => {
            const meal = Meal.findByID(1);
    
            expect(meal).toEqual(menuData[0]);
        });

        it('should return the menu', () => {
            const menu = Meal.all();
            
            expect(menu).toEqual(menuData);
        });

        // UPADTE
        // it('should update an existing meal', () => {
        //     const newMeal = Meal.update(1,{ name:'Special Lasagna', price: 10});
            
        //     expect().toBe()
        // });

    });
   


});