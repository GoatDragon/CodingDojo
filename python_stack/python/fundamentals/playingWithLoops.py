colors = ['red', 'blue', 'green', 'white', 'orange']
numbers = ['one', 'two', 'three', 'four']
print(f'color list length: {len(colors)}')
print(f'number list length: {len(numbers)}')
# cool stuff from https://www.youtube.com/watch?v=OSGv2VnC0go
print(list(enumerate(zip(colors, numbers))))
for i, color in enumerate(colors):
    print(f'index: {i} - color: {color}')
print(list(zip(colors, numbers)))
for i, zipped in enumerate(zip(colors, numbers)):
    print(f'index: {i} - color: {zipped[0]} - number: {zipped[1]}')

y = 3
while y > 0:
    print(y)
    y = y - 1
    # this break prevents the else statement from running
    if y == 0:
        break
else:
    print("Final else statement")
