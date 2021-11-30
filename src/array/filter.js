/**
 * 根据回调函数cb筛选数组 cb返回bool类型
 *
*/

import { isDef, isArray } from '../utils'

const filter = (arr, cb) => {
	const res = []
	if (isDef(arr) && isArray(arr)) {
		arr.forEach((value, index) => {
			if (cb(value, index, arr)) {
				res.push(value)
			}
		})
	}

	return res
}

export default filter
