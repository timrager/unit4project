class WelcomeController < ApplicationController
    
    def index
        render json: {status: 200, message: "Subs API"}
    end

end
