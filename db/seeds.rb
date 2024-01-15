greetings = [
  'Salam',
  'Hello',
  'Hi',
  'Hola',
  'Namaste'
]

greetings.each do |greeting|
  Message.create(content: greeting)
end

puts 'Seeded database with greetings.'
