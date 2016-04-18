require 'test_helper'

class Api::V1::UsersControllerTest < ActionController::TestCase

  test '#create' do

    post :create, format: :json, username: 'bill', password: '123456', email: 'bill@hello.com'
    answer = JSON.parse(response.body)

    assert_equal User.all.last[:username], answer['username']
    assert_equal User.all.last[:email], answer['email']
  end

end
