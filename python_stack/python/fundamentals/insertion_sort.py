
# the_list = [2, 9, 6, 100, 1, 13, 500, 2, 0, 4, 1, -1, 5, 1, -1000]
the_list = reversed(range(5000))
# print(the_list)


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

    return sorted_list


print(insertion_sort(the_list))


# same sorting algorith, replacing values in place in given list
# rather than creating a new list and appending values to that;
# as of yet non-functional
def inplace_insertion_sort(a_list):
    for j, num in enumerate(a_list):
        found = False

        for i, sorted_num in enumerate(a_list):
            if num < sorted_num:
                a_list.insert(i, num)
                print("inserted", num, "at index", i)
                del a_list[j]
                print("deleted", a_list[j], "at index", j)
                print(a_list)
                found = True
                break

        if not found:
            a_list.append(num)
            print("appended", num)
            del a_list[j]
            print("deleted", a_list[j], "at index", j)
            print(a_list)
            
    return a_list


# print(inplace_insertion_sort(the_list))
