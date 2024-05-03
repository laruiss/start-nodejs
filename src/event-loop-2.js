console.log('Start') // Immediately

setTimeout(() => {
  console.log('setTimeout callback executed')
}, 0) // technically, internally, this will be set as 4, not 0

setImmediate(() => { // this callback is scheduled to be executed as soon as possible
  // (... also when the callstack is empty, so after the promise callback above, which was scheduled first)
  console.log('setImmediate executed')
})

process.nextTick(() => { // this callback is scheduled to be executed as soon as possible
  // ...but when the callstack is empty AND when the microtask queue is empty
  console.log('nextTick callback executed')
})

Promise.resolve().then(() => { // this callback is scheduled to be executed as soon as possible
  // ...but when the callstack is empty
  console.log('Promise resolved')
})

console.log('End') // Immediately
