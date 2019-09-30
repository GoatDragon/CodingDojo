def partial(cents, coin='Dol'):
    answers = []
    if coin == 'Dol':
        max_dollars = cents // 100
        for i in range(max_dollars + 1):
            HQDNP = partial(cents - i * 100, 'H')
            for answer in HQDNP:
                answer['dollars'] = i
                answers.append(answer)
    if coin == 'H':
        max_halfdollars = cents // 50
        for i in range(max_halfdollars + 1):
            QDNP = partial(cents - i * 50, 'Q')
            for answer in QDNP:
                answer['half dollars'] = i
                answers.append(answer)
    if coin == 'Q':
        max_quarters = cents // 25
        for i in range(max_quarters + 1):
            DNP = partial(cents - i * 25, 'D')
            for answer in DNP:
                answer['quarters'] = i
                answers.append(answer)
    if coin == 'D':
        max_dimes = cents // 10
        for i in range(max_dimes + 1):
            NP = partial(cents - i * 10, 'N&P')
            for answer in NP:
                answer['dimes'] = i
                answers.append(answer)
    if coin == 'N&P':
        max_nickles = cents // 5
        for i in range(max_nickles + 1):
            answers.append({
                'pennies': cents - i * 5,
                'nickles': i
            })
    return answers


for i, answer in enumerate(partial(100, 'Q')):
    print(i + 1, answer)
