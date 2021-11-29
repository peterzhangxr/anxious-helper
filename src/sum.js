/**
 * 求和
 * 数字求和，一个或多个求和 如可以 sum(...array)
*/
function sum(a, b, ...rest) {
	let total = a + b
	rest.forEach((v) => {
		total += v
	})

	return total
}

export default sum
