class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount

    def make_withdrawal(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):
        print(f"{self.name}, Balance ${self.account_balance}")

    def transfer_money(self, amount, receiver):
        print(f"transfering ${amount} from {self.name} to {receiver.name}")
        self.account_balance -= amount
        receiver.account_balance += amount


guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
goat = User("Billy Bob", "goat@dragon.com")

guido.make_deposit(100)
guido.make_deposit(20)
guido.make_deposit(30)
guido.make_withdrawal(15)
guido.display_user_balance()

monty.make_deposit(5)
monty.make_deposit(10)
monty.make_withdrawal(2)
monty.make_withdrawal(4)
monty.display_user_balance()

goat.make_deposit(1000)
goat.make_withdrawal(5)
goat.make_withdrawal(10)
goat.make_withdrawal(15)
goat.display_user_balance()

guido.transfer_money(100, goat)
guido.display_user_balance()
goat.display_user_balance()
