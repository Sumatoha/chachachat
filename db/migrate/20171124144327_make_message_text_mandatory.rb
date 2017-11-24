class MakeMessageTextMandatory < ActiveRecord::Migration[5.1]
  def change
    change_column :messages, :text, :string, null: false
  end
end
