def guess_number guess
    number = 25
    if guess == number
        puts "you got it!"
    elsif guess > number
        puts "too high"
    else
        puts "too low"
    end
end

guess_number 100000