let food = null;
let drink = null;
let dessert = null;
let foodP = null;
let drinkP = null;
let dessertP = null;
let cont = 0;

function selectFood(item,desc, price){

    diselectOption('food')
    console.log('me clicaram', item);
    item.classList.add("selected");

    foodP = price;
    food = desc;
    cont++

    const icon = document.querySelector(".check");
    item.classList.contains("selected") ? 
    icon.classList.remove("hidden") :
    icon.classList.add("hidden")
   
    orderFood()

    
}



function selectDrink(item,desc, price){
    diselectOption('drink')

    console.log('me clicaram', item);
    item.classList.add("selected");

    drinkP = price;
    drink = desc;
    cont++

    const icon = document.querySelector(".check");
    item.classList.contains("selected") ? 
    icon.classList.remove("hidden") :
    icon.classList.add("hidden")

    orderFood()

    
}

function selectDessert(item,desc, price){
    diselectOption('dessert')

    console.log('me clicaram', item);
    item.classList.add("selected");

    dessertP = price;
    dessert = desc;
    cont++

    const icon = document.querySelector(".check");
    icon.classList.remove("hidden") 

    orderFood()

    
}
function diselectOption(option){
    //verfifica se tem selected
    //disseleciona se tiver
    //decrementa o cont
   
    item.classList.add("selected");

    foodP = price;
    food = desc;
    cont--
    
    
    
}

function orderFood(){
    if (cont === 3){

    }
}