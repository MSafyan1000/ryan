require 'rails_helper'

RSpec.describe Post, type: :model do
  it 'check post author' do
    post = Post.new(title: "New post")
    expect(post.post_with_author('Username')).to eq 'Username: New post'
  end
end
