class goat:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def sound(self):
        print("baahhhh", "\n")

    def dance(self):
        print(self.name, "is dancing", "\n")

    def rename(self, new_name):
        self.name = new_name


billy = goat("Billy", "Ibex")


print("Our goat's name is", billy.name, "\n")
print(billy.name, "is an", billy.breed, "\n")
billy.dance()
billy.sound()
billy.rename("George")
print("Billy's name is now", billy.name, "\n")
