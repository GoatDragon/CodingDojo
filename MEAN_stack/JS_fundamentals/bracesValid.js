function bracesValid(braces){
    let stack = []
    const match = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for (let i = 0; i < braces.length; i++){
        if (
            braces.charAt(i) == "(" ||
            braces.charAt(i) == "[" ||
            braces.charAt(i) == "{"
        ){
            stack.push(braces.charAt(i))
        }
        if (
            braces.charAt(i) == ")" ||
            braces.charAt(i) == "]" ||
            braces.charAt(i) == "}"
        ){
            if (match[stack.pop()] != braces.charAt(i)) {
                return false
            }
        }
    }
    return true
}
console.log(bracesValid("[{{}[]}([{(Hello World!)}])]"))