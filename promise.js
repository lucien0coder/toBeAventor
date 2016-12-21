//------- promise
function timeout(ms){
	return a;
}


//-------Generator
// function* helloWorldGenerator(){
// 	yield 'hello';
// 	yield 'world';
// 	return 'ending';
// }

// var hw = helloWorldGenerator();

// var a = hw.next()

// var b = hw.next()

// var c = hw.next()

// var d = hw.next()

// console.log(a)

// console.log(b)

// console.log(c)

// console.log(d)

function* f(){
	console.log('执行中')
}

var Generator = f()

setTimeout(function(){
	Generator.next()
},2000)