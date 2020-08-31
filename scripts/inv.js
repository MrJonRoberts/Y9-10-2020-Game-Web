
// inventory system
/*
    the inventory is a list of itmes that we can:
        add to 
        remove (drop)
        use from
    the list should be sorted by item type, name then qty.
*/

/*
    Items:
      
        desc
        value
        quality
        name
        size
        weight
        effect / duration
        icon
        sound
        type - potion, weapon, treasure

*/

class Item{
    name;
    desc;
    value;
    quality;
    size;
    weight;
    effect;
    icon;
    type;
   
    constructor(name, desc, value, quality, size, weight, vol, effect, icon, type){
        this.name = name;
        this.desc = desc;
        this.value = value;
        this.quality = quality;
        this.size = size;
        this.weight = weight;
        this.vol = vol;
        this.effect = effect;
        this.icon = icon;
        this.type = type;  
       
        displayOutput("Created "+ this.name);
        
        
    }
    
    
 }


class Inv{
    items;
    name;
    maxSize;    // item size
    maxVol; // item vol
    maxWeight;  // weight
    curSize;
    curWeight;
    curVol;
    
    constructor(name, maxSize, maxCapacity, maxWeight){
        this.name = name;
        this.maxSize = maxSize;
        this.maxCapacity = maxCapacity;
        this.maxWeight = maxWeight;
        this.curSize = 0;
        this.curWeight = 0;
        this.curCapacity = 0;
        this.items = [];
        this.display();
    }
    
   
    
    
}


function displayOutput(msg){
    console.log(msg);
}

sword = new Item("A basic sword", "this sword is very rusty", 10, 
                 "poor", 3,1,1,"basic damage", "sword-brandish.png", "weapon");


potion = new Item("A health potion", "this potion looks green and glows", 150, 'common', 1,1,1,"basic health", "coffee-cup.png", "food");



