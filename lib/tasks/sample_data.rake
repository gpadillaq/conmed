namespace :db do
  desc "Crear datos de ejemplo."
  task :sample => ['db:ensure_development_or_staging', 'environment'] do
    sample_file = 'db/samples.rb'
    load(sample_file) if File.exists?(sample_file)
  end

  task :ensure_development_or_staging do
    if !['development','staging'].include? Rails.env
      puts "Esta tarea solo puede ser ejecutada en un ambiente de desarrollo."
      exit
    end
  end
end