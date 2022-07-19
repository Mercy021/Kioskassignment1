//Question 1

var Kiosk=[
    {name:"berries",
    fruitPrice:200,
    },
    {name:"melon",
    fruitPrice:70,
    },
    {name:"plums",
    fruitPrice:100,
    }]
    function calculateFruitsCost(name,quantity){
        let b= Kiosk.find(item=>item.name===name)
        console.log(`${quantity} ${name} for KES ${b.fruitPrice*quantity}`)
    
    }
    calculateFruitsCost("plums",5)
 //Question 2

    class KioskCalc{
        constructor(fruits,quantity){
            this.fruits=fruits
            this.quantity=quantity
            this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
            this.getTotalCost=function(){
                return `${quantity} ${fruits} for KES ${quantity*this.fruitsPriceList.orange}`
            }
        }
        
    }
    var kioskCalc= new KioskCalc("orange",7);
    console.log(kioskCalc.getTotalCost());