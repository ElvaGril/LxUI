/**
 * 获取表单数据
 */

export default function getFormData(element) {
    let obj = {}

    if (element instanceof HTMLElement) {
        const eles = element.querySelectorAll('[name]')
        for(let item of eles) {
            if(item.value) {
                obj[item.name] = item.value
            }
        }
        return obj
    }else {
        throw new Error('传入的参数不是 DOM 对象')
    }
}