/**
 * 公共的方法
*/
const { toString } = Object.prototype
/**
 * 检测是否为空
*/
export function isDef(v) {
	return v !== null && v !== undefined
}

/**
 * 检测是否是对象
*/
export function isObject(v) {
	return v !== null && typeof v === 'object'
}

/**
 * 检测是否为基本类型
*/
export function isPrimitive(v) {
	return typeof v === 'number' || typeof v === 'string' || typeof v === 'boolean' || typeof v === 'symbol'
}

/**
 * 检测是否为数组
*/
export function isArray(v) {
	return Array.isArray(v)
}

/**
 * 检测是否为Function
*/
export function isFunction(v) {
	return typeof v === 'function'
}

/**
 * 检测是否为null
*/
export function isNull(v) {
	return v === null
}

/**
 * 检测是否Symbol
*/
export function isSymbol(v) {
	return typeof v === 'symbol' || (isObject(v) && toString.call(v) === '[object Symbol]')
}
