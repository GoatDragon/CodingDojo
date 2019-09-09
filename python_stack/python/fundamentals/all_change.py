coins = [1, 5, 10, 25]
solutions = []


def partial(amt, coin_i=0, solution=[0, 0, 0, 0]):
    if coin_i > len(coins) - 1:
        return
    max = amt // coins[coin_i]
    for i in range(max):
        print(f"\ncoin: {coin_i}, loop: {i}\n")  # test
        solution[coin_i] = i
        remaining = amt - (i * coins[coin_i])
        if remaining <= 0:
            solutions.append(solution)
            print(f"solution found: {solution}, {sum(solution)}")  # test
            return solution
        else:
            print(f"recursing on amt: {amt}, coin_i: {coin_i}, solution: {solution}")  # test
            partial(amt, coin_i + 1, solution)


partial(5)
print(solutions)