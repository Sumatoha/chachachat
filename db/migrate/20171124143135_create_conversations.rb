class CreateConversations < ActiveRecord::Migration[5.1]
  def change
    create_table :conversations do |t|
      t.string :name

    end
 
    create_table :conversations_users, id: false do |t|
      t.belongs_to :user, index: true
      t.belongs_to :conversation, index: true
    end
  end
end
