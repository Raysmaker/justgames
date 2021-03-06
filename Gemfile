source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.4.1'
gem 'rails', '~> 5.2.1'

# Use Puma as the app server
gem 'puma', '~> 3.11'
# https://github.com/rails/jquery-rails
gem 'jquery-rails'
# https://github.com/glebm/popper_js-rubygem
gem 'popper_js', '~> 1.14.3'
# https://github.com/twbs/bootstrap-rubygem
gem 'bootstrap', '~> 4.1.3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'mini_racer', platforms: :ruby
# Read here: https://github.com/stympy/faker
gem 'faker'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

group :development, :test do
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3'
  # Read here: https://github.com/rspec/rspec-rails
  gem 'rspec-rails', '~> 3.7'
  # Read here: https://github.com/thoughtbot/factory_bot_rails
  gem 'factory_bot_rails'
  # https://github.com/thoughtbot/shoulda-matchers
  gem 'shoulda-matchers'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # https://github.com/glejeune/Ruby-Graphviz
  gem 'ruby-graphviz'
  # https://github.com/voormedia/rails-erd
  gem 'rails-erd'
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :production do
  gem 'pg', '~> 0.20.0'
  gem 'rails_12factor'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
