# README

# DB設計

  ## users table
  |Column|Type|Options|
  |------|----|-------|
  |name|string|index: true, null: false, unique: true|
  |email|string|null: false, unique: true|
  |password|string|null: false|
  |group_id|integer|foreign_key: true|

  ### Association
  * has_many :groups, through: :members
  * has_many :messages

  ## groups table
  |column|Type|Options|
  |------|----|-------|
  |group_name|string|index:true, null: false|
  |user_id|integer|null: false, foreign_key: true|

  ### Association
  * has_many :users, through: :members
  * has_many :messages

  ## members table
  |column|Type|Options|
  |------|----|-------|
  |user_id|integer|null: false, foreign_key: true|
  |group_id|integer|null: false, foreign_key: true|

  ### Association
  * belongs_to :user
  * belongs_to :group

  ## messages table
  |Column|Type|Options|
  |------|----|-------|
  |body|text|null: false|
  |image|string||
  |user_id|integer|foreign_key: true|
  |group_id|integer|foreign_key: true|

  ### Association
  * belongs_to :user
  * belongs_to :group

# 初期記述内容
This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
