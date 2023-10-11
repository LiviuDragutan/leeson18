// ===========.map=============

const arr = [6, 7, 8, 9, 10]

const arr1 = arr.map((item, index) => {
    return {
        count: item,
        index: index
    }
}) 
console.log( 'arr', arr)
console.log( 'arr1', arr)

// ==========filter=========


const myArray = [6, 7, 8, 9, 10]
const myArray1 = myArray.filter ((item, idx) => {
    return idx > 2
})

console.log (myArray)
console.log (myArray1)

// =============indexof=========

const myArray2 = [6, 7, 8, 9, 10]
const idx = myArray2.indexOf(6)

console.log (idx)


// ==============findindex======

const myArray3 = [10, 11, 12, 13, 14, 15]
const finding = myArray3.findIndex((item) => {
return item > 14
})
console.log (finding)


// ===========every=============

const myArray4 = [10, 11, 12, 13, 14, 15]
const every = myArray3.every((item) => {
return item < 14
})
console.log (every)

// ==============some=============

const myArray5 = [10, 11, 12, 13, 14, 15]
const some = myArray3.some((item) => {
return item < 14
})
console.log (some)

// ==============flat==============

const myArray6 = [[10, 11], 12, 13, [14, [15]]]
console.log( myArray6.flat(2))

// ==============foreach=======

const myArray7 = [10, 11, 12, 13, 14, 15]
myArray7.forEach ((item, index) => {
    console.log('item:', item)
    console.log('index:', index)
})

// ==============find=======
const myArray8 = [10, 11, 12, 13, 14, 15]
const find = myArray8.find((item, index) => {
return item > 10
})
console.log ('found', find)

// ============concat=========

const myArray9 = ['Best']
const myArray10 = ['Dogs']
const mergArray = myArray9.concat(myArray10)

console.log(mergArray)

// ============concat2=========

const spreadOP1 = ['Best']
const spreadOP2 = ['Dogs']
const mergArray1 = [...spreadOP1, ...spreadOP2]

console.log(mergArray1)


// =============includes=========

const include = [10, 11, 12, 13, 14, 15]
console.log( include.includes(12))

// =============push=========

const pushing = [10, 11, 12, 13, 14, 15]
pushing.push(16, 17);
console.log(pushing)