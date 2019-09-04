class BankAccount:
    def __init__(self, name, int_rate, balance):
        self.name = name
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount
        return self

    def display_account_info(self):
        print(f"Balance is ${self.balance} with {int(self.int_rate*100)}% interest")
        return self

    def yield_interest(self):
        self.balance += self.balance * (self.int_rate)
        return self


acc1 = BankAccount("account 1", 0.02, 1000)
acc2 = BankAccount("account 2", 0.05, 100)

acc1.deposit(10).deposit(20).deposit(30).withdraw(5).yield_interest().display_account_info()
acc2.deposit(100).deposit(200).withdraw(10).withdraw(20).withdraw(50).withdraw(70).yield_interest().display_account_info()
