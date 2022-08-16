const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;
console.log(isEqualTo100(100,0))
console.log(isEqualTo100(0,100))

const getFileExtension = (str) => str.slice
(str.lastIndexOf('.'))
console.log(getFileExtension('index.html'))
c