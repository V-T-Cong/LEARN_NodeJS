const _ = require('lodash')

const item = [1, [2, [3, [4]]]]
const newItems = _.flattenDepth(item)
console.log(newItems)