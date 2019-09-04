class Underscore:
    def map(self, iterable, callback):
        mapped_list = []
        for item in iterable:
            mapped_list.append(callback(item))
        return mapped_list

    def find(self, iterable, callback):
        for item in iterable:
            if callback(item):
                return item

    def filter(self, iterable, callback):
        filtered_list = []
        for item in iterable:
            if callback(item):
                filtered_list.append(item)
        return filtered_list

    def reject(self, iterable, callback):
        filtered_list = []
        for item in iterable:
            if not callback(item):
                filtered_list.append(item)
        return filtered_list


_ = Underscore()

evens = _.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)
print(evens)  # should return [2, 4, 6] after you finish implementing the code above

print(_.map([1, 2, 3], lambda x: x * 2))  # should return [2,4,6]
print(_.find([1, 2, 3, 4, 5, 6], lambda x: x > 4))  # should return the first value that is greater than 4
print(_.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0))  # should return [2,4,6]
print(_.reject([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0))  # should return [1,3,5]
