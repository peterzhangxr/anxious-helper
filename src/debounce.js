/* eslint-disable no-param-reassign */
/**
 * 防抖函数 lodash
*/
function debounce(cb) {
	if (typeof cb !== 'function') {
		throw new TypeError('cb must be a function')
	}

	// options = options && isObject(options) ? options : {}
	// wait = +wait || 0

	// 但wait等于0的时候，优先使用requestAnimationFrame
	// const useRAF = wait == 0 && typeof root.requestAnimationFrame === 'function'

	// 初始变量
	/*
	let leading = !!options.leading
	let maxing = 'maxWaite' in options
	let maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : 0
	let traling = 'traling' in options ? !!options.traling : true */

	// 定义this arg
	function debounced(...args) {
		console.log(args)
	}

	return debounced
}

export default debounce
