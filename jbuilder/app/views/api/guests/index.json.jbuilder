json.array! @guests do |guest|
  json.partial! 'api/guests/guest', guest: guest

  # json.name guest.name
  # json.age guest.age
  # json.favorite_color guest.favorite_color
end

# json.partial! 'api/guests/guest', collection: @guests, as: :guest