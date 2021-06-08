const generateMessage = {
    
    generateMaxValue (array, index) {

        let counter = 0;
        
        while (array [index] [counter] != null)
            counter += 1;
        return counter;
    },

    generateValue (max) {
        return Math.floor(Math.random() * max);
    },
    
    generateRandMessage (array, value1, value2, value3) {

        console.log(`Your dinner consist of: ${array [0] [value1]} ${array [1] [value2]} and ${array [2] [value3]}`);
    }
}

//Test by importing large array of words
let testArray = [['Baked', 'Blind-baked', 'Boiled', 'Blanched', 'Braised', 'Coddled', 'Infused', 'Pressure cooked', 'Simmered', 'Steamed', 'Double steamed', 'Steeped', 'Stewed', 'Vacuum flask cooked', 'Broilled', 'Grilled', 'Barbecued', 'Fried', 'Deep fried', 'Gently fried', 'Hot salt fried', 'Pan fried', 'Pressure fried', 'Sautèd', 'Shallow fried', 'Stir fried', 'Microwaved', 'Roasted', 'Rotisseried', 'Smoked', 'Brined Ceviched', 'Dried', 'Fermented', 'Pickeled', 'Salted', 'Seasoned', 'Soured', 'Sprouted', 'Sugared', 'Basted', 'Milled', 'Grated', 'Minced', 'Shaved', 'Julied', 'Chiffonade', 'Blended'], 
                ['Chicken', 'Peas', 'Pork', 'Beef', 'Lamb', 'Chick peas', 'Sausage', 'Goat', 'Turkey', 'Duck', 'Rabbit', 'Whale', 'Salmon', 'Herring', 'Crab', 'Lobster', 'Reindeer'], 
                ['potato','bread','soup','cheese','salad','salsa','garlic bread', 'rice', 'pudding', 'stew', 'crisps', 'baked potato', 'pesto', 'pasta', 'flatbread', 'carrots']];

let valueMax0 = generateMessage.generateMaxValue(testArray, 0);
let value1 = generateMessage.generateValue(valueMax0);

let valueMax1 = generateMessage.generateMaxValue(testArray, 1);
let value2 = generateMessage.generateValue(valueMax1);

let valueMax2 = generateMessage.generateMaxValue(testArray, 2);
let value3 = generateMessage.generateValue(valueMax2);

generateMessage.generateRandMessage(testArray, value1, value2, value3);