my_hash = {a:1, b:2, c:3}
puts my_hash.has_key?(:a)
puts my_hash.has_value?(1)
my_hash.delete(:a)
puts my_hash.empty?
puts my_hash