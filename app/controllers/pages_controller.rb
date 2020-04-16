class PagesController < ApplicationController
  def main
    @post = ::Post.last
  end
end
