import unittest


class Stack:

    def __init__(self):
        self.items = []
        self.max = 5

    def push(self, item):
        if len(self.items) < max:
            self.items.append(item)
        else:
            print("stack overflow")

    def popitem(self):
        self.items.pop()

    def peak(self):
        return self.items[len(self.items)-1]

    def print_stack(self):
        print(self.items)


class StackTest(unittest.TestCase):
    def test(self):
        st = Stack()

        st.push(1)
        st.push(2)
        st.print_stack()
        st.popitem()
        st.print_stack()
        st.push(3)
        st.push(3)
        self.assertEquals(st.peak(), 3)
        st.popitem()
        st.popitem()
        st.print_stack()

