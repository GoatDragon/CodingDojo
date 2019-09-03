import random


def rand_int(min=0, max=100):
    if min > max:
        temp = min
        min = max
        max = temp
    return round(random.random() * (max - min) + min)


print(rand_int())           # should print a random integer between 0 to 100
print(rand_int(max=50))         # should print a random integer between 0 to 50
print(rand_int(min=50))         # should print a random integer between 50 to 100
print(rand_int(min=50, max=500))    # should print a random integer between 50 and 500


# test function not yet finished
def test_rand_int(test_min=100000, test_max=-100000):
    numbs = []
    test = True
    if test_min > test_max:
        temp = test_min
        test_min = test_max
        test_max = temp
    for i in numbs:  # this line is incomplete
        numbs.append(rand_int(test_min, test_max))
    for numb in numbs:
        if numb > test_max or numb < test_min:
            test = False
    return test


# print(test_rand_int())
