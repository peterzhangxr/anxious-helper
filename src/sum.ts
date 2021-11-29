/**
 * 求和
 * 多项求和，
 * 至少有两个参数
*/
function sum(a: number, b: number, ...rest: number[]): number {
	let total: number = a + b
	rest.forEach((v: number) => {
		total += v
	})

	return total
}

export default sum
