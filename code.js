function depthFirstSearch(graph, startNode, targetNode) {
    if (startNode == targetNode) return [targetNode];
    let visited = [startNode];
    let stack = [startNode];
    let path = [];

    path = nodeTraversal(graph, targetNode, stack, visited, path);
    if (path.includes(targetNode)) return path;
    else return [];
}

function nodeTraversal(graph, targetNode, stack, visited, path, found = [false]) {
    let current = stack.pop();
    visited.push(current);
    if (current == targetNode) {
        found[0] = true
        return path.push(current);
    } 
    else {
        path.push(current);
        for (edge in graph[current]) {
            let next = graph[current][edge]
            if(!visited.includes(next)) {
                stack.push(next);
                nodeTraversal(graph, targetNode, stack, visited, path, found)
            }
            if (found[0]) return path
            path.pop()
        }
    }
    return path;
}
