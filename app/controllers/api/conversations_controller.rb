module Api
  class ConversationsController < ApplicationController
    def create
      conversation = Conversation.new(permitted_params.merge(users: [current_user]))
      authorize conversation
      if conversation.save
        render json: conversation
      else
        render json: { errors: conversation.errors }, status: 422
      end
    end

    def index
      conversations = policy_scope(Conversation)
      render json: conversations
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
