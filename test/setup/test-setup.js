/*
 * @Author: alex_chen
 * @Date: 2022-05-11 11:16:37
 * @LastEditors: alex_chen
 * @LastEditTime: 2022-05-11 11:16:49
 * @Description: 文件描述
 */
const noop = () => {}
Object.defineProperty(window, "scrollTo", { value: noop, writable: true })
