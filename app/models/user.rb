class User < ApplicationRecord
  validates :password_digest, presence: true
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  attr_reader :password

  after_initialize :ensure_session

  def self.find_by_creds(creds)
    if @user = User.find_by(username: creds.username)
      return @user if @user.is_password?(creds.password)
      false
    end
  end

  def ensure_session
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session
    self.session_token = SecureRandom.urlsafe_base64
    save
  end

  def is_password?(check_pass)
    BCrypt::Password.new(:password_digest).is_password?(check_pass)
  end

  def password=(new_pass)
    @password = new_pass;
    self.password_digest = BCrypt::Password.create(new_pass)
  end
end
