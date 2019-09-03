the_list = [6, 5, 3, 1, 8, 7, 2, 4]
print("original list:", the_list)

#the function I wrote
def selection_sort(a_list):
    for j in range(len(a_list)):
        min_val = a_list[j]
        min_index = j
        for i in range(j, len(a_list)):
            if a_list[i] < min_val:
                min_val = a_list[i]
                min_index = i
        the_list[min_index], the_list[j] = the_list[j], the_list[min_index]
    return the_list


# print("final list:", selection_sort(the_list))


# a more "pythonic" method from google search
def pythonic_selection_sort(sort_list):
    for j in range(len(sort_list)):
        smallest_element = min(sort_list[j:])
        index = sort_list.index(smallest_element)
        sort_list[j], sort_list[index] = sort_list[index], sort_list[j]
        print("\nPASS", j, sort_list)
    print('\n\nThe sorted list: \t', sort_list)
    print('\n')


pythonic_selection_sort(the_list)


# the function I wrote with test prints in place:
def selection_sort_with_prints(a_list):
    for j in range(len(a_list)):
        print("*j*:", j)
        min_val = a_list[j]
        min_index = j
        print("current min value:", min_val, "at index:", min_index)
        for i in range(j, len(a_list)):
            print("i:", i)
            if a_list[i] < min_val:
                min_val = a_list[i]
                min_index = i
                print("min value of:", min_val, "found at index:", min_index)
        print("min value:", min_val, "at index:", min_index)
        the_list[min_index], the_list[j] = the_list[j], the_list[min_index]
        print("current list:", the_list)
    return the_list


# print("final list:", selection_sort_with_prints(the_list))
