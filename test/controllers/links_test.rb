require 'test_helper'

class Api::V1::LinksControllerTest < ActionController::TestCase

  test '#create' do

    post :create, format: :json, url: 'www.google.com', title: 'google'
    
    answer = JSON.parse(response.body)
    assert_response :success
    assert_equal Link.all.last[:url], 'www.google.com'
    assert_equal Link.all.last[:title], 'google'
  end


end
