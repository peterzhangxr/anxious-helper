/**
 * ts实现数组筛选
*/
import { isDef, isArray } from '../utils'

const filter = <T>(arr: T[], cb: Function): T[] => {
	const res: T[] = []
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
