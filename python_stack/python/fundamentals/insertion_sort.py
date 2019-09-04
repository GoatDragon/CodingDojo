
# the_list = [2, 9, 6, 100, 1, 13, 500, 2, 0, 4, 1, -1, 5, 1, -1000]
the_list = list(reversed(range(100000)))


def insertion_sort(a_list):
    sorted_list = []
    for given_num in a_list:
        found = False
        for i, sorted_num in enumerate(sorted_list):
            if given_num < sorted_num:
                sorted_list.insert(i, given_num)
                found = True
                break
        if not found:
            sorted_list.append(given_num)
    print(iter)
    return sorted_list


print(insertion_sort(the_list))
