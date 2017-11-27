class ConversationPolicy < ApplicationPolicy
  def create?
    true
  end

  class Scope < ApplicationPolicy::Scope
    def resolve
      user.conversations
    end
  end
end
