class User < ActiveRecord::Base
  include DeviseTokenAuth::Concerns::User
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  after_create :create_role

  protected

  def confirmation_required?
    false
  end

  def create_role
    role = Role.where(name: 'Standard').first

    if role.present?
      ur = UserRole.new
      ur.role_id = role.id
      ur.user_id = self.id
      ur.save
    end
  end

end