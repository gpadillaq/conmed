require 'test_helper'

class ClinicControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get clinic_index_url
    assert_response :success
  end

end
