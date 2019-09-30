    #print 1-255
# puts (1..255).to_a.to_s

    #Print odd numbers between 1-255
# odds = (1..255).reject { |i| i % 2 == 0 }
# puts odds.to_s

#     # Print Sum
# sum = 0
# for i in 0..255
#     puts "New number: #{i} sum: #{sum += i}"
# end

    #Iterating through an array
# x = [1,3,5,7,9,13]
# x.each {|i| puts i}

    #find max
# array = [40, -19, -200, 15, 22, -5, 5, 6, 99, 201, 345, 12, -9]
# def find_max arr
#     max = arr[0]
#     arr.each {|i| max = i if i > max}
#     return max
# end
# puts find_max array

#     #Get Average
# array = [40, -19, -200, 15, 22, -5, 5, 6, 99, 201, 345, 12, -9]
# def get_average arr
#     sum = 0
#     arr.each{|i| sum += i}
#     return sum / arr.length
# end
# puts get_average array

#     # Array with Odd Numbers
# def odd_array
#     y = (1..255).reject{|i| i % 2 == 0}
# end
# puts odd_array

#     #greater than Y
# def greater_than_y arr, y
#     total = 0
#     arr.each {|i| total += 1 if i > y}
#     return total
# end
# puts greater_than_y [11, 21, 31, 415, -13], 23

#     #square the values
# arr = [1, 5, 10, -2]
# def square_the_values arr
#     arr.map! {|i| i*i}
# end
# square_the_values arr
# puts arr

    #eliminate negative numbers
# arr = [1, 5, 10, -2]
# def remove_negs arr
#     for i in 0...arr.count
#         if arr[i] < 0
#             arr[i] = 0
#         end
#     end
#     return arr
# end
# puts remove_negs arr

    #min max and average
# def mma arr
#     sum = 0
#     min = arr[0]
#     max = arr[0]
#     arr.each{|i| sum += i; min = i if i < min; max = i if i > max}
#     return "max: #{max}, min: #{min}, avg: #{sum / arr.length}"
# end
# puts mma [1,2,3,4,5]

    #shifting the values in the array
# def shifting arr
#     for i in 0...arr.count
#         arr[i] = arr[i+1]
#     end
#     arr[-1] = 0
#     return arr
# end

# puts shifting [1, 5, 10, 7, -2]

    #number to string
# arr = [1, 5, 10, -2]
# def num_to_string arr
#     for i in 0...arr.count
#         if arr[i] < 0
#             arr[i] = 'dojo'
#         end
#     end
#     return arr
# end
# puts num_to_string arr