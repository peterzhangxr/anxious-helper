/**
 * 环境全局变量的判断
*/
const freeGlobalThis = typeof globalThis === 'object' && global !== null && global.Object === Object && globalThis

const freeGlobal = typeof global === 'object' && global !== null && global.Object === Object && global

const freeWindow = typeof window === 'object' && window !== null && window.Object === Object && window

const root = freeGlobalThis || freeGlobal || freeWindow

export default root
