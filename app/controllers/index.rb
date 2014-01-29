get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  puts params
  input = params["user_input"]
    if input == input.upcase
      @grandma = 'ok hunny'
    else
      @grandma = 'speak up sunny'
    end

    content_type :json
    { :response => @grandma }.to_json
end

