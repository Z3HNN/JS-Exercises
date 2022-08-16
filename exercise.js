const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;
console.log(isEqualTo100(100,0))
console.log(isEqualTo100(0,100))

const getFileExtension = (str) => str.slice
(str.lastIndexOf('.'))
console.log(getFileExtension('index.html'))


const moveCharsFoward = (str) => 
str
.split('')
.map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('')


const formatDate = (date = new Date()) => {
    const days = date.getDay()
    const months = date.getMonth()
    const years = date.getFullYear()
    return `${days}/${months}/${years}`
}

console.log(formatDate())


const addNew = (str) => `New! ${str}`
console.log(addNew('Offers'))