class TimesController < ApplicationController
  def restart
    session.clear
    render text: "you destroyed the sesion... you monster"
  end
  def times
    if session[:id]
        session[:id] += 1
    else
        session[:id] = 1
    end
  render text: "you visited this URL #{session[:id]} times"
  end

end
