// @ts-nocheck
const readline = require('node:readline');

const rl = readline.createInterface(process.stdin, process.stdout)

let realPerson = {
  name: '',
  saying: []
}

function questionName() {
  rl.question("Имя должно быть больше одной буквы. Введите имя снова: ", (answer) => {
    realPerson.name = answer;
  
    if (realPerson.name.length > 1) {
      rl.close()
    } else {
      questionName()
    }
  })
}

rl.question("Введите ваше имя: ", (answer) => {
  realPerson.name = answer;

  if (realPerson.name.length > 1) {
    rl.close()
  } else {
    questionName()
  }
})

rl.on('close', () => {
  console.log(`Hello ${realPerson.name}!`)
})