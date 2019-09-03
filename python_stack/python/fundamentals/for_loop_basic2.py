    # Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
    #     Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]
def biggie_size(lst):
    for i, num in enumerate(lst):
        if num > 0:
            lst[i] = 'big'
    return lst


# print(biggie_size([-1, 3, 5, -5]))


    # Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
    #     Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
    #     Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it
def count_positives(lst):
    count = 0
    length = -1
    for num in lst:
        length += 1
        if num > 0:
            count += 1
    lst[length] = count
    return lst


# print(count_positives([1, 6, -4, -2, -7, -2]))
# print(count_positives([-1, 1, 1, 1]))


    # Sum Total - Create a function that takes a list and returns the sum of all the values in the array.
    #     Example: sum_total([1,2,3,4]) should return 10
    #     Example: sum_total([6,3,-2]) should return 7
def sum_total(lst):
    total = 0
    for num in lst:
        total += num
    return total


# print(sum_total([6, 3, -2]))


    # Average - Create a function that takes a list and returns the average of all the values.
    #     Example: average([1,2,3,4]) should return 2.5
def average(lst):
    total = 0
    length = 0
    for num in lst:
        total += num
        length += 1
    return total / length


# print(average([1, 2, 3, 4]))


    # Length - Create a function that takes a list and returns the length of the list.
    #     Example: length([37,2,1,-9]) should return 4
    #     Example: length([]) should return 0
def length(lst):
    length = 0
    for item in lst:
        length += 1
    return length


# print(length([1, 'sam', 'bob', 5, 6, [1, 2, 3]]))


    # Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
    #     Example: minimum([37,2,1,-9]) should return -9
    #     Example: minimum([]) should return False
def minimum(lst):
    if lst:
        minimum = lst[0]
        for num in lst:
            if num < minimum:
                minimum = num
        return minimum
    return bool(lst)


# print(minimum([37, 2, 1, -9]))
# print(minimum([]))


    # Maximum - Create a function that takes a list and returns the maximum value in the array. If the list is empty, have the function return False.
    #     Example: maximum([37,2,1,-9]) should return 37
    #     Example: maximum([]) should return False
def maximum(lst):
    if lst:
        maximum = lst[0]
        for num in lst:
            if num > maximum:
                maximum = num
        return maximum
    return bool(lst)


# print(maximum([37, 2, 1, -9]))
# print(maximum([]))


    # Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
    #     Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }
def ultimate(lst):
    if lst:
        min = lst[0]
        max = lst[0]
        sum = 0
        len = 0
        for num in lst:
            sum += num
            len += 1
            if max < num:
                max = num
            if min > num:
                min = num
        return f'sum:{sum}  avg:{sum/len}  min:{min}  max:{max}'
    return bool(lst)


# print(ultimate([37, 2, 1, -9]))
# print(ultimate([]))


    # Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
    #     Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]
def reverse_list(lst):
    for i in range(len(lst) // 2):
        temp = lst[i]
        lst[i] = lst[-1-i]
        lst[-1-i] = temp
    return lst


print(reverse_list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
