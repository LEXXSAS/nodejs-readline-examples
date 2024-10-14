// @ts-nocheck
const readline = require('node:readline');

const rl = readline.createInterface(process.stdin, process.stdout)

let realPerson = {
  name: '',
  saying: []
}

rl.question("What your name? ", (answer) => {
  realPerson.name = answer;

  rl.setPrompt(`What would ${realPerson.name} say? `)

  rl.prompt()
  
  rl.on('line', function(say) {

    realPerson.saying.push(say.trim())

    if (say.toLocaleLowerCase().trim() === 'exit') {
      rl.close()
    } else {
      rl.setPrompt(`What would ${realPerson.name} say? ('exit' to leave) `);
      rl.prompt()
    }
  })
})

rl.on('close', () => {
  console.log('%s is real person that says %j', realPerson.name, realPerson.saying[0])
})
