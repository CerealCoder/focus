export function getSiblings(element) {

    let childrenNodes = []
    let parent = Array.from(element.parentNode.children)

    parent.forEach(function (child) {

        if (child.nodeType == 1 && child != element) {
            childrenNodes.push(child)
        }

    })

    return childrenNodes
}
