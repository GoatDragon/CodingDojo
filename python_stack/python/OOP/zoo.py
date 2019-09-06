class Animal:
    def __init__(self, name, age, health=100, happiness=10):
        self.name = name
        self.age = age
        self.health = health
        self.happiness = happiness

    def display_info(self):
        print(f"{self.name} is a {self.age} year old {self.__class__.__name__.lower()}. Happiness: {self.happiness} Health: {self.health}")

    def feed(self):
        self.happiness += 1
        self.health += 10
        print(f"You have fed {self.name}. Happiness: {self.happiness} Health: {self.health}")


class Goat(Animal):
    def __init__(self, name, age, horn_length, health=200, happiness=15):
        super().__init__(name, age, health, happiness)
        self.horn_length = horn_length

    def display_info(self):
        super().display_info()
        print(f"Also, his horn length is {self.horn_length} units.")

    def feed(self):
        self.happiness += 2
        self.health += 2
        super().feed()


class Cat(Animal):
    def __init__(self, name, age, health=50, happiness=11):
        super().__init__(name, age, health, happiness)

    def meow(self):
        print(f"{self.name} the {self.__class__.__name__.lower()} meows.\n'MEOW!'")


class Dog(Animal):
    def __init__(self, name, age, health=110, happiness=9000):
        super().__init__(name, age, health, happiness)

    def bark(self):
        print(f"{self.name} the {self.__class__.__name__.lower()} barks.\n'WOOF!'")


test = Animal('testcritter', 9000)
test.display_info()
test.feed()
print()

billy = Goat(name="Billy", age=5, horn_length=6)
billy.display_info()
billy.feed()
print()

meow = Cat("Meowzer", 2)
meow.display_info()
meow.feed()
meow.meow()
print()

harvey = Dog("Harvey", 3)
harvey.display_info()
harvey.feed()
harvey.bark()
print()
