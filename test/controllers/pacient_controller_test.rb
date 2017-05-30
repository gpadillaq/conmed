require 'test_helper'

class PacientControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pacient_index_url
    assert_response :success
  end

end
