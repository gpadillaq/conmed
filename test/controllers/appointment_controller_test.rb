require 'test_helper'

class AppointmentControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get appointment_index_url
    assert_response :success
  end

end
