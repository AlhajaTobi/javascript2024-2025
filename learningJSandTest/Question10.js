let david = {"groceries" : 150, "dining out" :100, "transportation": 50, "entertainment" :80};

let sum = 0
for(const prop in david){
	sum += david[prop];	
}
console.log(sum);
