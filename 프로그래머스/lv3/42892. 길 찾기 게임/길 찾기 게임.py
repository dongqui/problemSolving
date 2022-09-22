import sys
sys.setrecursionlimit(10**6)

def solution(nodeinfo):
    _nodeinfo = list(map(lambda x: [x[0] + 1, x[1]], enumerate(nodeinfo)))
    _nodeinfo.sort(key=lambda x: x[1][1], reverse=True)

    def create_node(value, name):
        _node = {
            'value': value,
            'name': name,
            'left': None,
            'right': None
        }

        return _node
    print(_nodeinfo)
    root = create_node(_nodeinfo[0][1][0], _nodeinfo[0][0])
    for node in _nodeinfo[1:]:
        idx, position = node
        x, y = position
        cur = root
        while True:
            try:
                if cur['value'] < x:
                    if cur['right'] is not None:
                        cur = cur['right']
                    else:
                        cur['right'] = create_node(x, idx)
                        break
                else:
                    if cur['left'] is not None:
                        cur = cur['left']
                    else:
                        cur['left'] = create_node(x, idx)
                        break
            except:
                print('e')

    def pre(cur_node, path):
        if 'name' in cur_node:
            path.append(cur_node['name'])
        if 'left' in cur_node and cur_node['left'] is not None:
            pre(cur_node['left'], path)
        if 'right' in cur_node and cur_node['right'] is not None:
            pre(cur_node['right'], path)
        return path

    def post(cur_node, path):
        if 'left' in cur_node and cur_node['left'] is not None:
            post(cur_node['left'], path)
        if 'right' in cur_node and cur_node['right'] is not None:
            post(cur_node['right'], path)
        if 'name' in cur_node:
            path.append(cur_node['name'])

        return path

    return [pre(root, []), post(root, [])]

