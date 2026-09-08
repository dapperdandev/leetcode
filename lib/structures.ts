// Shared data structures and test helpers. Shapes match LeetCode's TypeScript definitions, and the
// array conversions follow LeetCode's example notation (level-order trees with nulls, etc.).

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/** Node type for Clone Graph (133). */
export class GraphNode {
    val: number;
    neighbors: GraphNode[];
    constructor(val?: number, neighbors?: GraphNode[]) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

/** Node type for Copy List with Random Pointer (138). */
export class RandomListNode {
    val: number;
    next: RandomListNode | null;
    random: RandomListNode | null;
    constructor(val?: number, next?: RandomListNode | null, random?: RandomListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}

export function arrayToList(values: number[]): ListNode | null {
    let head: ListNode | null = null;
    for (let i = values.length - 1; i >= 0; i--) head = new ListNode(values[i], head);
    return head;
}

export function listToArray(head: ListNode | null): number[] {
    const out: number[] = [];
    const seen = new Set<ListNode>();
    for (let node = head; node !== null; node = node.next) {
        if (seen.has(node)) throw new Error("listToArray: cycle detected");
        seen.add(node);
        out.push(node.val);
    }
    return out;
}

/** Builds a list whose tail points back to index `pos` (-1 for no cycle), as in Linked List Cycle (141). */
export function arrayToListWithCycle(values: number[], pos: number): ListNode | null {
    const nodes = values.map((v) => new ListNode(v));
    for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
    if (nodes.length > 0 && pos >= 0) nodes[nodes.length - 1].next = nodes[pos];
    return nodes[0] ?? null;
}

/** LeetCode level-order notation: children of a null are omitted. */
export function arrayToTree(values: (number | null)[]): TreeNode | null {
    if (values.length === 0 || values[0] === null) return null;
    const root = new TreeNode(values[0]);
    const queue: TreeNode[] = [root];
    let i = 1;
    while (i < values.length) {
        const node = queue.shift()!;
        const left = values[i++];
        if (left !== undefined && left !== null) {
            node.left = new TreeNode(left);
            queue.push(node.left);
        }
        const right = values[i++];
        if (right !== undefined && right !== null) {
            node.right = new TreeNode(right);
            queue.push(node.right);
        }
    }
    return root;
}

export function treeToArray(root: TreeNode | null): (number | null)[] {
    const out: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];
    while (queue.length > 0) {
        const node = queue.shift()!;
        if (node === null) {
            out.push(null);
            continue;
        }
        out.push(node.val);
        queue.push(node.left, node.right);
    }
    while (out.length > 0 && out[out.length - 1] === null) out.pop();
    return out;
}

/** Finds the first node with the given value (used for LCA-style inputs given as values). */
export function findNode(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) ?? findNode(root.right, val);
}

/** Adjacency-list notation from Clone Graph (133): index i holds the neighbors of node i + 1. */
export function arrayToGraph(adjList: number[][]): GraphNode | null {
    if (adjList.length === 0) return null;
    const nodes = adjList.map((_, i) => new GraphNode(i + 1));
    adjList.forEach((neighbors, i) => {
        nodes[i].neighbors = neighbors.map((n) => nodes[n - 1]);
    });
    return nodes[0];
}

export function graphToArray(node: GraphNode | null): number[][] {
    if (node === null) return [];
    const byVal = new Map<number, GraphNode>();
    const stack = [node];
    while (stack.length > 0) {
        const cur = stack.pop()!;
        if (byVal.has(cur.val)) continue;
        byVal.set(cur.val, cur);
        stack.push(...cur.neighbors);
    }
    const out: number[][] = [];
    for (let v = 1; v <= byVal.size; v++) out.push(byVal.get(v)!.neighbors.map((n) => n.val));
    return out;
}

/** [value, randomIndex | null] pairs from Copy List with Random Pointer (138). */
export function arrayToRandomList(pairs: [number, number | null][]): RandomListNode | null {
    const nodes = pairs.map(([v]) => new RandomListNode(v));
    pairs.forEach(([, r], i) => {
        nodes[i].next = nodes[i + 1] ?? null;
        nodes[i].random = r === null ? null : nodes[r];
    });
    return nodes[0] ?? null;
}

export function randomListToArray(head: RandomListNode | null): [number, number | null][] {
    const nodes: RandomListNode[] = [];
    for (let n = head; n !== null; n = n.next) nodes.push(n);
    return nodes.map((n) => [n.val, n.random === null ? null : nodes.indexOf(n.random)]);
}

/** Recursively sorts arrays so results that may come back "in any order" can be compared with toEqual. */
export function sortDeep<T>(value: T): T {
    if (!Array.isArray(value)) return value;
    const sorted = value.map((v) => sortDeep(v));
    sorted.sort((a, b) => {
        const sa = JSON.stringify(a);
        const sb = JSON.stringify(b);
        return sa < sb ? -1 : sa > sb ? 1 : 0;
    });
    return sorted as T;
}

/**
 * Drives a design problem the way LeetCode does: ops[0] is the class name (constructed with args[0]),
 * each following op is a method call. Returns one entry per op (null for void calls), matching the
 * expected output array in the examples.
 */
export function runOps(ctor: new (...args: never[]) => object, ops: string[], args: unknown[][]): unknown[] {
    type Method = (...methodArgs: unknown[]) => unknown;
    const out: unknown[] = [];
    let obj: Record<string, Method> = {};
    ops.forEach((op, i) => {
        if (i === 0) {
            const Ctor = ctor as new (...ctorArgs: unknown[]) => Record<string, Method>;
            obj = new Ctor(...(args[i] ?? []));
            out.push(null);
            return;
        }
        const result = obj[op](...(args[i] ?? []));
        out.push(result === undefined ? null : result);
    });
    return out;
}
