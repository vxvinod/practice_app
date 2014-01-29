class User < ActiveRecord::Base
  attr_accessible :username,:password,:password_confirmation
  has_secure_password

  validates :username ,uniqueness: {case_senstive:false}, presence: true,
  						length:{in: 4..12},
  						format:{with:/^[a-z][a-z0-9]*$/,message:"can only contain lower case letter"}
  validates :password,presence:true,length:{in: 4..8}
   validates :password_confirmation,presence:true,length:{in: 4..8}
end
