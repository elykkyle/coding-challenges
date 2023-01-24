/*
https://www.codewars.com/kata/57c15d314677bb2bd4000017

In the morning all the doors in the school are closed. The school is quite big: there are N doors. Then pupils start coming. It might be hard to believe, but all of them want to study! Also, there are exactly N children studying in this school, and they come one by one.

When these strange children pass by some doors they change their status (i.e. Open -> Closed, Closed -> Open). Each student has their number, and each i-th student alters the status of every i-th door. For example: when the first child comes to the schools, he changes every first door (he opens all of them). The second one changes the status of every second door (he closes some doors: the 2nd, the 4th and so on). Finally, when the last one – the n-th – comes to the school, he changes the status of each n-th door (there's only one such door, though).

You need to count how many doors are left opened after all the students have come.

Input:

n – the number of doors and students, n ∈ N, n ∈ [1, 100000]

Output:

o – the number of opened doors, o ∈ N

doors(5)
Should return: 2
*/

// function doors(n) {
//   const doorsArr = Array(n).fill(false, 0, n);
//   const totalStudents = n;
//   let curStudent = 1;
//   while (curStudent <= totalStudents) {
//     doorsArr.forEach((door, i, arr) => {
//       (i + 1) % curStudent === 0 ? (arr[i] = !door) : door;
//     });
//     curStudent++;
//   }
//   return doorsArr.filter((door) => door === true).length;
// }

// function doors(n) {
//   const doorsArr = Array(n).fill(false, 0, n);
//   const totalStudents = n;
//   let curStudent = 1;
//   while (curStudent <= totalStudents) {
//     doorsArr.forEach((door, i, arr) => {
//       (i + 1) % curStudent === 0 ? (arr[i] = !door) : door;
//     });
//     curStudent++;
//   }
//   return doorsArr.filter((door) => door === true).length;
// }

function doors(n) {
  const doorsArr = Array(n).fill(false, 0, n);
  const totalStudents = n;
  let curStudent = 1;
  while (curStudent <= totalStudents) {
    for (let i = curStudent; i <= totalStudents; i + i) {
      doorsArr[i - 1] = !doorsArr[i - 1];
    }
    curStudent++;
  }
  return doorsArr.filter((door) => door === true).length;
}

console.log(doors(5)); // 2
console.log(doors(10)); // 3
console.log(doors(100)); // 10
