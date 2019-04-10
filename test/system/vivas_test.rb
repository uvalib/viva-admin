require "application_system_test_case"

class VivasTest < ApplicationSystemTestCase
  setup do
    @viva = vivas(:one)
  end

  test "visiting the index" do
    visit vivas_url
    assert_selector "h1", text: "Vivas"
  end

  test "creating a Viva" do
    visit vivas_url
    click_on "New Viva"

    fill_in "Institution", with: @viva.institution
    click_on "Create Viva"

    assert_text "Viva was successfully created"
    click_on "Back"
  end

  test "updating a Viva" do
    visit vivas_url
    click_on "Edit", match: :first

    fill_in "Institution", with: @viva.institution
    click_on "Update Viva"

    assert_text "Viva was successfully updated"
    click_on "Back"
  end

  test "destroying a Viva" do
    visit vivas_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Viva was successfully destroyed"
  end
end
