/*
    TAG ===> 栈
    将以 Unix 风格给出一个文件的绝对路径，转换为规范路径。

    输入："/home/"                 输出："/home"
    输入："/home//foo/"            输出："/home/foo"
    输入："/a/../../b/../c//.//"   输出："/c"
    输入："/a//b////c/d//././/.."  输出："/a/b/c"
*/

/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
    const stack = []
    const pathArr = path.split('/')

    for (let item of pathArr) {
        switch (item) {
            case '.':
            case '':
                break
            case '..':
                stack.pop();
                break
            default:
                stack.push(item)
                break
        }
    }
    return '/' + stack.join('/');
}
