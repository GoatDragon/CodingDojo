require_relative 'mammal'

class Dog < Mammal
    def pet
        @health += 5
        self
    end

    def walk
        @health -= 1
        #why tf would a walk decrease a dog's health?
        self
    end

    def run
        @health -= 10
        #dogs love to run, again, why tf would it decrease their health?
        self
    end

    def display_health
        puts @health
    end
end

dog = Dog.new
dog.walk.walk.walk.run.run.pet.display_health