n = int(input())

tree = {}

for _ in range(n):
    node, left, right = list(input().split())
    tree[node] = {'left': left, 'right': right}


def preorder(s, node):
    if node != '.':
        s += node
        s = preorder(s, tree[node]['left'])
        s = preorder(s, tree[node]['right'])
    return s


def inorder(s, node):
    if node != '.':
        s = inorder(s, tree[node]['left'])
        s += node
        s = inorder(s, tree[node]['right'])
    return s


def postorder(s, node):
    if node != '.':
        s = postorder(s, tree[node]['left'])
        s = postorder(s, tree[node]['right'])
        s += node
    return s


print(preorder('', 'A'))
print(inorder('', 'A'))
print(postorder('', 'A'))

