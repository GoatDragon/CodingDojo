require 'test_helper'

class TimesControllerTest < ActionDispatch::IntegrationTest
  test "should get restart" do
    get times_restart_url
    assert_response :success
  end

end
