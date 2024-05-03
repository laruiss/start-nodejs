// import EventEmitter from native node module
import EventEmitter from 'node:events' // node: prefix is optional but strongly recommended

// Create a new EventEmitter object
const myEmitter = new EventEmitter()

// Register an event listener
myEmitter.on('event', () => {
  console.log('An event occurred!')
})

// Emit an event
myEmitter.emit('event')
