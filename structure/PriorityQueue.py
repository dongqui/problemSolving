import unittest


class PriorityQueue:

    def __init__(self):
        self.items = [0]

    def __len__(self):
        return len(self.items) - 1

    def percolate_up(self):
        i = len(self)
        while i // 2 > 0:
            if self.items[i] < self.items[i // 2]:
                self.items[i // 2], self.items[i] = self.items[i], self.items[i // 2]
                i = i // 2
            else:
                break

    def insert(self, k):
        self.items.append(k)
        self.percolate_up()

    def percolate_down(self, i):
        while i * 2 <= len(self):
            mc = self.min_child(i)
            if self.items[i] > self.items[mc]:
                self.items[i], self.items[mc] = self.items[mc], self.items[i]
                i = mc
            else:
                break

    def min_child(self, i):
        if i * 2 + 1 > len(self):
            return i * 2

        if self.items[i * 2] < self.items[i * 2 + 1]:
            return i * 2

        return i * 2 + 1

    def delete_min(self):
        return_value = self.items[1]
        self.items[1] = self.items[len(self)]
        self.items.pop()
        self.percolate_down(1)
        return return_value


class PqUnitTest(unittest.TestCase):

    def test(self):

        pq = PriorityQueue()

        pq.insert(3)
        pq.insert(1)
        pq.insert(9)
        pq.insert(1)
        pq.insert(8)

        self.assertEqual(1, pq.delete_min())
        self.assertEqual(1, pq.delete_min())
        self.assertEqual(3, pq.delete_min())
        self.assertEqual(8, pq.delete_min())