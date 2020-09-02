class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  def is_admin?
    return current_user.present? && Permission.find_by_sql(["SELECT name FROM permissions p JOIN user_permissions up ON p.id = up.permission_id WHERE p.name = :permission AND up.user_id = :user_id", {permission: 'Admin', user_id: current_user.id}]).present?
  end
end
