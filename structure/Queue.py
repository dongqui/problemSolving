import unittest


class Queue:

    def __init__(self):
        self.items =[]

    def enqueue(self, item):
        self.items.insert(0, item)

    def dequeue(self):
        self.items.pop()

    def printQueue(self):
        print(self.items)

    def size(self):
        return len(self.items)


class QueueTest(unittest.TestCase):

    def test(self):
        q = Queue()
        q.enqueue(0)
        q.enqueue(2)
        q.enqueue(5)
        q.printQueue()
        self.assertEqual(3, q.size())
        q.dequeue()
        q.printQueue()



