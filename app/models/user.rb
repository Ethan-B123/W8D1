class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  attr_reader :password

  after_initialize :ensure_session

  def ensure_session
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session
    self.session_token = SecureRandom.urlsafe_base64
  end

  def password=(new_pass)
    @password = new_pass;
    self.password_digest = BCrypt::Password.create(new_pass)
  end
end
