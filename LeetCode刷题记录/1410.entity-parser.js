/*
    TAG ===> 栈
    题目：「HTML 实体解析器」 是一种特殊的解析器，它将 HTML 代码作为输入，并用字符本身替换掉所有这些特殊的字符实体。
*/

/**
 * @param {string} text
 * @return {string}
 */
const entityParser = function (text) {
    const entityMap = {
        '&quot;': `\"`,
        '&apos;': `'`,
        '&amp;': `&`,
        '&gt;': `>`,
        '&lt;': `<`,
        '&frasl;': `/`,
    };
    let res = '';
    const stack = [];
    let isEntity = false;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '&') {
            stack.push(text[i]);
            isEntity = true;
            continue
        } else if (isEntity) {
            stack.push(text[i]);
            if (text[i] === ';') {
                const entity = stack.join('')
                console.log(entity, entityMap[entity]);
                if (entityMap[entity]) {
                    res += entityMap[entity]
                } else {
                    res += entity
                }
                stack.length = 0
                isEntity = false;
            }
        } else { 
            res += text[i]; 
        }
    }

    return res
};