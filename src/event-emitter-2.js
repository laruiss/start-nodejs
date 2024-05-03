import process from 'node:process'

console.log('Start') // Immediately

process.on('exit', () => {
  console.log('exit event')
})

console.log('End') // Immediately
