def bubble_sort(some_list):
    for j in range(len(some_list) - 1):
        for i in range(len(some_list) - 1 - j):
            if some_list[i] > some_list[i + 1]:
                some_list[i], some_list[i + 1] = some_list[i + 1], some_list[i]
    return some_list


the_list = [6, 5, 3, 1, 8, 7, 2, 4]
print(bubble_sort(the_list))
