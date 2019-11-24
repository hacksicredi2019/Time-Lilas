# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

def generate_features
  @schools = School.all
  @schools.each do |school|
    Feature.create(name: 'Desempenho', category: 'performance', description: '', rating: 0.0, school_id: school.id, icon: '/assets/performance.png').save
    Feature.create(name: 'Acessibilidade', category: 'accessibility', description: '', rating: 0.0, school_id: school.id, icon: '/assets/accessibility.png').save
    Feature.create(name: 'Ensino', category: 'teaching', description: '', rating: 0.0, school_id: school.id, icon: '/assets/teaching.png').save
    Feature.create(name: 'Avaliações', category: 'rating', description: '', rating: 0.0, school_id: school.id, icon: '/assets/rating.png').save
  end
end

generate_features()
