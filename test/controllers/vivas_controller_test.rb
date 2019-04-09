require 'test_helper'

class VivasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @viva = vivas(:one)
  end

  test "should get index" do
    get vivas_url
    assert_response :success
  end

  test "should get new" do
    get new_viva_url
    assert_response :success
  end

  test "should create viva" do
    assert_difference('Viva.count') do
      post vivas_url, params: { viva: { institution: @viva.institution } }
    end

    assert_redirected_to viva_url(Viva.last)
  end

  test "should show viva" do
    get viva_url(@viva)
    assert_response :success
  end

  test "should get edit" do
    get edit_viva_url(@viva)
    assert_response :success
  end

  test "should update viva" do
    patch viva_url(@viva), params: { viva: { institution: @viva.institution } }
    assert_redirected_to viva_url(@viva)
  end

  test "should destroy viva" do
    assert_difference('Viva.count', -1) do
      delete viva_url(@viva)
    end

    assert_redirected_to vivas_url
  end
end
