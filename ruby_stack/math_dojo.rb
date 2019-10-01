class MathDojo
    # attr_accessor :result
    def initialize
        @result = 0
    end
    def add *nums
        for num in nums
            if num.kind_of?(Array)
                num.each{|i| @result += i}
            else
                @result += num
            end

        end
        self
    end
    def subtract *nums
        nums.each {|i| i.each{|i| @result -= i} if i.kind_of?(Array)}
        nums.each {|i| @result -= i unless i.kind_of?(Array)}
        self
    end
    def result
        puts @result
    end
end
challenge1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2).result # => 4
challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result # => 23.15
# test = MathDojo.new
# test.subtract(3, [20,3]).result