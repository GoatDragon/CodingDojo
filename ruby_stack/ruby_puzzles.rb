# def array_over_10 arr
#     sum = 0
#     arr.each{|i| sum += i}
#     puts sum
#     return arr.find_all{|i| i> 10}
# end
# puts array_over_10 [3,5,1,2,7,9,8,13,25,32]

# def shuffle_names names
#     names.shuffle.each{|name| puts name}
#     return names.find_all{|name| name.length > 5}
# end

# puts shuffle_names ['John', 'KB', 'Oliver', 'Cory', 'Matthew', 'Christopher']

# alpha = ('a'..'z').to_a
# alpha.shuffle!
# puts alpha.last
# puts alpha.first
# if ['a', 'e', 'i', 'o', 'u'].include? alpha.first
#     puts "first letter is vowel"
# end

# arr = []
# for i in 0...10
#     arr.push((rand*45 + 55).floor)
# end
# puts arr

# arr = []
# for i in 0...10
#     arr.push((rand*45 + 55).floor)
# end
# puts arr.sort.to_s
# puts arr.min
# puts arr.max

# str = ""
# for i in 0...5
#     str += (65+rand(26)).chr
# end
# puts str

# arr = []
# for i in 0...10
#     str = ""
#     for i in 0...5
#         str += (65+rand(26)).chr
#     end
#     arr.push str
# end
# puts arr.to_s