class BankAccount
    @@accounts = 0
    @@interest_rate = 0.1
    attr_accessor :account_number, :savings, :checking
    def initialize
        generate_account_number
        @checking = 0
        @savings = 0
        @@accounts += 1
    end

    def display_account_number
        puts @account_number
    end

    def deposit(acct, amt)
            @savings += amt if acct == 'savings'
            @checking += amt if acct == 'checking'
            puts "account does not exist" unless acct == 'savings' or acct == 'checking'
    end

    def withdrawl(acct, amt)
            puts "checking account has insuffecient funds" if amt > @checking and acct =='checking'
            puts "savings account has insuffecient funds" if amt > @savings and acct =='savings'
            @savings -= amt if acct == 'savings' and amt < @savings
            @checking -= amt if acct == 'checking' and amt < @checking
            puts "account does not exist" unless acct == 'savings' or acct == 'checking'
    end

    def view_total
        puts @savings + @checking
    end

    def accounts
        puts @@accounts
    end

    def account_information
        puts @account_number, @savings, @checking, @savings+@checking, @@interest_rate
    end

    private
        def generate_account_number
            @account_number = ""
            10.times {@account_number += rand(10).to_s}
            @account_number = @account_number.to_i
        end
end


b = BankAccount.new
a = BankAccount.new
b.display_account_number
b.deposit 'savings', 10
b.deposit 'checking', 100
b.withdrawl 'savings', 9
puts b.checking
puts b.savings
b.view_total
puts b.accounts
b.account_information