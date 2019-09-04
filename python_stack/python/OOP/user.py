class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f"{self.name}, Balance ${self.account_balance}")
        return self

    def transfer_money(self, amount, receiver):
        print(f"transfering ${amount} from {self.name} to {receiver.name}")
        self.account_balance -= amount
        receiver.account_balance += amount
        return self


guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
goat = User("Billy Bob", "goat@dragon.com")

guido.make_deposit(100).make_deposit(20).make_deposit(30).make_withdrawal(15).display_user_balance()

monty.make_deposit(5).make_deposit(10).make_withdrawal(2).make_withdrawal(4).display_user_balance()

goat.make_deposit(1000).make_withdrawal(5).make_withdrawal(10).make_withdrawal(15).display_user_balance()

guido.transfer_money(100, goat).display_user_balance()
goat.display_user_balance()
