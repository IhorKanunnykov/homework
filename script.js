// возврат расштрения строки после точки
const format = str => {
	str = str.toLowerCase().split('').reverse()

	let check = str.filter((j) => { return j === '.' })
	if (check == '.') {
		let format = []
		for (let i = 0; i < str.length; i++) {
			format.unshift(str[i])
			if (str[i] == '.') {
				break
			}
		}
		//format.shift()
		delete format[0]
		return format.join('')
	} else {
		return 'нет расширений'
	}
}
console.log(format('ssd.html'))
// ___________________________________________________________________________
// создание нового метода для любых массивов
const array = [2, 4]
const array1 = [3, 5]

Array.prototype.multBy = function (n) {
	return this.map((i) => {
		return i * n
	})
}
console.log(array1.multBy(10))
// ___________________________________________________________________________
const str = ['bab', 'www', 'qwqwxxs']
str.forEach((string) => {
	const palindrom = string => {
		string = string.toLowerCase()
		let palindromStr = string.split('').reverse().join('')
		if (string === palindromStr) {
			console.log(`${string} is palindrom`)
		}
	}
	palindrom(string)
})
// ___________________________________________________________________________
// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. 
const builCharObj = str => {
	const charObj = {}
	for (char of str.toLowerCase()) {
		charObj[char] = charObj[char] + 1 || 1
	}
	return charObj
}

const anagram = (strA, strB) => {
	const aCharObj = builCharObj(strA)
	const bCharObj = builCharObj(strB)
	// console.log(aCharObj)
	// console.log(bCharObj)
	if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length) {
		//Object.keys(aCharObj) возвращает массив с ключами объекта
		return false
	}
	for (let char in aCharObj) {
		if (aCharObj[char] !== bCharObj[char]) {
			return false
		}
	}
	return true

}
console.log(anagram('wdc', 'dmc'))
// ___________________________________________________________________________
// замыкание счетчик
function a() {
	let b = 0
	return function () {
		b++
		console.log(b)
	}
}
let z = a()
z()
z()
// ______________________
//еще замыкание

let x = 10;
function foo(a) {
	let b = 20;
	function bar(c) {
		let d = 30;
		return boop(x + a + b + c + d);
	}
	function boop(e) {
		return e * -1;
	}
	return bar;
}
let moar = foo(5);
console.log(moar(15));
// ___________________________________________________________________________

// let age = prompt('введи', '')
// let access = (age > 18) ? 'true' : 'false'
// console.log(access)
// ___________________________________________________________________________
function first(callback) {
	console.log(1)
	callback()
}
function second(a, b) {
	console.log(a * b)
}
first(() => second(7, 2))
// ___________________________________________________________________________
// let arr = [2, 3, 4, 5, 6, 7, 8]
// let h = []
// arr.forEach(num => h.push(num * 2))
// //let m = Math.max.apply(null, arr)
// let r = arr.reduce((result, num) => {
// 	console.log(result)
// 	return result + num
// }, 0)
// console.log(r)
// ___________________________________________________________________________
let palindrom1 = str => {
	str = str.toLowerCase()
	return str == str.split('').reverse().join('')
}
console.log(palindrom1('vd'))
// ___________________________________________________________________________
// const palarr = ['Aa', 'fr', 'ama']
// palarr.map(item => {
// 	item = item.toLowerCase()
// 	let reversedItem = item.split('').reverse().join('')
// 	if (item === reversedItem) {
// 		console.log(`${item} is palindrom`)
// 	}
// })
//_______________________________________________________________________________
// function fib(q) {
// 	if (q <= 2) {
// 		return 1
// 	}
// 	return fib(q - 1) + fib(q - 2)
// }
// console.log(fib(10))

// let www = 2
// switch (www) {
// 	case 1:
// 		console.log(1)
// 		break
// 	case 2:
// 		console.log(2)
// 		break
// }

//_______________________________________________________________________________
