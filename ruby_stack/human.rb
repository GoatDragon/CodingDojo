class Human
    attr_accessor :strength, :intelligence, :stealth, :health
    def initialize strength=3, stealth=3, intelligence=3, health=100
        @strength = strength
        @stealth = stealth
        @intelligence = intelligence
        @health = health
    end

    def attack(obj, dmg=10)
        if obj.class.ancestors.include? Human
            obj.health -= dmg
            true
        else
            false
        end
    end
end


class Wizard < Human
    def initialize
        super 3, 3, 25, 50
    end

    def heal
        @health += 10
    end

    def fireball obj
        attack obj, 20
    end

end


class Ninja < Human
    def initialize
        super 3, 175, 3, 100
    end

    def steal obj
        @health += 10 if attack obj
    end

    def get_away
        @health -= 15
    end
end


class Samurai < Human
    @@samurai_count = 0

    def initialize
        super 3, 3, 3, 200
        @@samurai_count += 1
    end

    def death_blow obj
        attack obj, obj.health
    end

    def meditate
        @health = 200
    end

    def how_many
        puts @@samurai_count
    end
end

h = Human.new
w = Wizard.new
n = Ninja.new
s = Samurai.new
s2 = Samurai.new

puts s.inspect