class TimeController < ApplicationController
    def index
        render text: Time.now.time.localtime
    end
end
