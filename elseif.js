let Water = ["200ml", "500ml"]
let Wine = ["Pedro Ximenez", "Blanco", "Tinto"]
let Juice = ["Pera", "Manzana","Naranja"]
let Soda = ["Regular"]

//? The idea is having an app in which you can choose the drink you're about to have.
//? For that, in this first case, I will use a switch loop, to account simply for the available options
//? I will also add a default option

switch (bebida) {
    case "Water" : let waterString = Water.join( ", ");
    console.log(waterString);
    break
    case "Wine" : let wineString = Wine.join(", ");
    console.log(wineString);
    break
    case "Juice" : let juiceString = Juice.join(", ");
    console.log(juiceString);
    break
    case"Soda" : let sodaString = Soda.join(", ");
    console.log(sodaString);
    break
    default : console.log("np hay nada")
}
