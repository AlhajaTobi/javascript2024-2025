//let indexrow = 4;
//let indexcolumns = 4;

let newArray = new Array(3);
let array = [[200,50,300,5],[10,25,7,100],[25,20,70,45],[500,170,11,35]]
for(let indexrows = 0; indexrows < array.length -1; indexrows++){
    newArray[indexrows] = array[1][indexrows];
}
 console.log(newArray);