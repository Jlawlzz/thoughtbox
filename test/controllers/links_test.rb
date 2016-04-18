require 'test_helper'

class Api::V1::LinksControllerTest < ActionController::TestCase

  test '#create' do

    post :create, format: :json, url_link: 'http://www.google.com', title: 'google'

    answer = JSON.parse(response.body)
    assert_response :success
    assert_equal Link.all.last[:url_link], 'http://www.google.com'
    assert_equal Link.all.last[:title], 'google'
  end

  test '#create_invalid_link' do

    post :create, format: :json, url_link: 'w3w.googlecom', title: 'google'

    answer = JSON.parse(response.body)
    assert_response 422
  end

  test '#edit' do
    link = Link.create(url_link: 'http://www.google.com', title: 'google')

    patch :update, format: :json, id: link.id, url_link: 'http://www.reddit.com', title: 'reddit'

    assert_equal Link.all.last[:url_link], 'http://www.reddit.com'
    assert_equal Link.all.last[:title], 'reddit'
  end

  test '#edit_read_status' do
    link = Link.create(url_link: 'http://www.google.com', title: 'google')

    patch :update, format: :json, id: link.id, read_status: true

    assert_equal Link.all.last[:url_link], 'http://www.google.com'
    assert_equal Link.all.last[:read_status], "true"
    assert_equal Link.all.last[:title], 'google'
  end


end
