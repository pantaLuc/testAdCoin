const table = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function sum (a, b) {
  if (a > 0 && b > 0) {
    if (a < b) {
      if (table.includes(a) && table.includes(b)) {
        const indexA = table.findIndex(item => item === a)
        const indexB = table.findIndex(item => item === b)
        let s = 0 // initial value of sum

        for (let i = indexA; i <= indexB; i++) {
          s += table[i]
        }

        return s
      }


      if (table.includes(a) && b > 100) {
        const index = table.findIndex(item => item === a)
        let s = 0 // initial value of sum

        for (let i = index; i < table.length; i++) {
          s += table[i]
        }

        return s
      }

      if (!table.includes(a) && !table.includes(b)) {
        return 0
      }
    } else {
      return 0
    }
  } else {
    return -1
  }
}

console.log( table, "expected result : ",sum(30, 60)) // output: 180
console.log(table, "expected result : ",sum(-20, 30)) // output: -1
console.log(table, "expected result : ",sum(50, 20)) // output: 0
console.log(table, "expected result : ",sum(90, 120)) // output: 190
console.log(table, "expected result : ",sum(110, 120)) // output: 0
console.log(table, "expected result : ",sum(10, 100)) // output: 550