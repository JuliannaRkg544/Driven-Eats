let food = null;
let drink = null;
let dessert = null;
let foodP = null;
let drinkP = null;
let dessertP = null;
let cont = 0;

function selectFood(item,desc, price){

    diselectOption('food')


    item.classList.add("selected");

    foodP = price;
    food = desc;
    cont++
    console.log("contador", cont)
    // const icon = document.querySelector(".check");
    // item.classList.contains("selected") ? 
    // icon.classList.remove("hidden") :
    // icon.classList.add("hidden")
   
    realeaseButton()

    
}



function selectDrink(item,desc, price){
    diselectOption('drink')

    item.classList.add("selected");

    drinkP = price;
    drink = desc;
    cont++
    console.log("contador", cont)

    // const icon = document.querySelector(".check");
    // item.classList.contains("selected") ? 
    // icon.classList.remove("hidden") :
    // icon.classList.add("hidden")

    realeaseButton()

    
}

function selectDessert(item,desc, price){
    diselectOption('dessert')

   
    item.classList.add("selected");


    dessertP = price;
    dessert = desc;
    cont++

    console.log("contador", cont)

    realeaseButton()

    
}
function diselectOption(option){
    //verfifica se tem selected
    //disseleciona se tiver
    //decrementa o cont
   let product = document.querySelector(`.${option} .selected`);
   if (product!==null){
       product.classList.remove("selected");
       cont--
   } 
    console.log("contador", cont);
}

function realeaseButton(){
    //verifica se tenho tres items selecionados
   
    const button = document.querySelector("footer button")
    if (cont === 3){
      button.classList.add("released")
      button.innerHTML = `Fechar Pedido`
      button.disabled = false;

   }
 }

 function orderFood(){
    console.log('clicado')
    reviewOrder()
  
 }
 
 // const linkDaMensagem = montaMensagemWhatsApp();
//     window.open(linkDaMensagem, '_blank').focus();

 function reviewOrder(){

    document.querySelector("aside").classList.remove("hidden")
 }

 function montaMensagemWhatsApp() {
    const numero = "5522999279652";
    const total = (foodP + drinkP + dessertP).toFixed(2);
  
    let mensagem = `Olá, gostaria de fazer o pedido:
      - Prato: ${food}
      - Bebida: ${drink}
      - Sobremesa: ${dessert}
      Total: R$ ${total}
    `;
  
    mensagem = encodeURIComponent(mensagem);
    return `https://wa.me/${numero}?text=${mensagem}`;
  }