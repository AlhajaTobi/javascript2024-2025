const testscores = [30,40,50,70,80,90,100,60,50,80]
    let result = testscores.filter((number) => {
    return number >= 70;
});

console.log(result)


const add = (array)=>{
    let result = array.map((number)=>{
        let answer = number + 5;
        return answer
    });

    return result;
}
console.log(add(testscores)) 


const square = (array)=>{
    let result = array.map((number)=>{
        let answer = number * number;
        return answer
    });
    return result;
}
console.log(square(testscores)) 



const classtime = ["9.00AM","11.00AM","1.00PM","3.00PM","5.00PM"]
let result2 = classtime.filter(time=> time.includes("PM"));

console.log(result2)


const bookDistribution = (array) => {
    let result = [];
    for (let member of array) {
        let obj = {
            name: member,
            status: "Delivered"
        };
        result.push(obj);
    }
    return result;
};

console.log(bookDistribution(["Caleb", "Gerard", "Lobaloba"]));

const expenses = {"groceries" :50 , "dining out":100 , "transportation":50, "entertainment":80 }
let total = 0;
for(const name in expenses ){
    total += expenses[name]
}
console.log(total)

const shoppingList = (array) =>{
    let result = [];
    array.filter((item) => {
        if (item.isHealthy === true ) result.push(item.name)     
    })
    return result;
}

console.log(shoppingList([
    { name: 'Apples', category: 'Fruits', isHealthy: true },
    { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
    { name: 'Carrots', category: 'Vegetables', isHealthy: true },
    { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
    { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
    { name: 'Soda', category: 'Beverages', isHealthy: false }
]))
