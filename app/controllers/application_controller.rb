class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  def is_admin?
    return current_user.present? && Role.find_by_sql(["SELECT name FROM roles r JOIN user_roles ur ON r.id = ur.role_id WHERE r.name = :role AND ur.user_id = :user_id", {role: 'Admin', user_id: current_user.id}]).present?
  end
end
