require 'test_helper'

class Api::V1::SessionsControllerTest < ActionController::TestCase

  test '#create' do

    post :create, format: :json, username: 'johny', password: '123456', email: 'johny@hello.com'
    
    answer = JSON.parse(response.body)

    assert_response :success
    assert_equal User.all.first[:username], answer['username']
  end


end
