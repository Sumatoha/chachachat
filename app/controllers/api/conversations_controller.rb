module Api
  class ConversationsController < ApplicationController
    def create
      conversation = Conversation.new(permitted_params)
      authorize conversation
      if conversation.save
        render json: conversation
      else
        render json: { errors: conversation.errors }, status: 422
      end
    end

    private

    def conversation
      @conversation ||= Conversation.find(params[:id])
    end

    def permitted_params
      params.require(:conversation).permit(:name)
    end
  end
end
