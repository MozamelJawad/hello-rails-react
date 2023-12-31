require "test_helper"

class Api::GreetingsControllerTest < ActionDispatch::IntegrationTest
  test "should get random" do
    get api_greetings_random_url
    assert_response :success
  end
end
