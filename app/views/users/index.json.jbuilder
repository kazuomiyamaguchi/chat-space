json.array! @products do |product|
  json.id user.id
  json.name user.name
end
