import sys


# the selection sort function I wrote:
def selection_sort(a_list):
    for j in range(len(a_list)):
        min_val = a_list[j]
        min_index = j
        for i in range(j, len(a_list)):
            if a_list[i] < min_val:
                min_val = a_list[i]
                min_index = i
        a_list[min_index], a_list[j] = a_list[j], a_list[min_index]
    return a_list


# call selection sort on list defined inside program
# the_list = [9, 6, 5, 3, 1, 10, 8, 7, 2, 4]
the_list = list(reversed(range(1000)))
print(selection_sort(the_list))


# functional method for cleaning input from terminal
def format_list(terminal_input):
    clean_list = []
    number = ''
    for character in terminal_input:
        if character != "," and character:
            number += character
        else:
            clean_list.append(int(number))
            number = ''
    if number.isdigit():
        clean_list.append(int(number))
    return clean_list


# call selection sort on cleaned terminal input
# print(selection_sort(format_list(sys.argv[1])))


# original method for cleaning input
# a = sys.argv[1].split(',')
# def coerce(num):
#     return int(num)
# b = list(map(coerce, a))


# functions below not relevant to the operation of functions above


# a more "pythonic" method from google search:
def pythonic_selection_sort(sort_list):
    for j in range(len(sort_list)):
        smallest_element = min(sort_list[j:])
        index = sort_list.index(smallest_element)
        sort_list[j], sort_list[index] = sort_list[index], sort_list[j]
        print("\nPASS", j, sort_list)
    print('\n\nThe sorted list: \t', sort_list)
    print('\n')


# pythonic_selection_sort(the_list)


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
        a_list[min_index], a_list[j] = a_list[j], a_list[min_index]
        print("current list:", a_list)
    return a_list


# print("final list:", selection_sort_with_prints(the_list))
