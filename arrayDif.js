let array1 = [1,2,3,4];
let array2 = [2, 3]
// final value should be [1,3,4]

function arrayDif(array1, array2) {
    for (let j = 0; j < array2.length; j ++) {
      for (let i = array1.length - 1; i >= 0; i--) {
        
      if (array1[i] === array2[j]) {
        console.log(array1[i]);
        array1.splice(i, 1)
      }

    }
  }
  return array1
}
console.log(arrayDif(array1, array2))

/*
splice(start)
splice(start, deleteCount)
*/

// function arrayDif(array1, array2) {
//   let finalArray = [];
//   let unwanteddElements = []
//   for (let i = 0; i < array2.length; i++) {
//     for (let j = 0; j < array1.length; j++) {
//       if (array1[j] !== array2[i]) {
//         finalArray.push(array1[j])
//       }

//     }
//   }
//   return finalArray
// }
