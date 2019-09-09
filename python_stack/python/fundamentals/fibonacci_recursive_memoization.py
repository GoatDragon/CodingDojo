fib_cache = {}


def fibonacci(n):
    if n <= 1:
        return n
    if n in fib_cache:
        return fib_cache[n]
    else:
        value = fibonacci(n - 1) + fibonacci(n - 2)
    fib_cache[n] = value
    return value


# print(fibonacci(900))


def fibonacci2(n):
    if n <= 1:
        return n
    else:
        return fibonacci2(n - 1) + fibonacci2(n - 2)

# print(fibonacci2(40))