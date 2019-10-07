    class SayController < ApplicationController
    def hello
        render text: "saying hello"
    end
    def name
        render text: "Saying Hello #{params[:name].capitalize}!"
    end
    def michael
        redirect_to "/say/hello/joe"
    end
    def what
        render text: 'Say whaaaat?!'
    end
    end
