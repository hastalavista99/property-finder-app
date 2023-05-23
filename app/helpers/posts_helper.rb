module PostsHelper
  def post_thumbnail_url post
    img = post.image.present? ? post.image.thumb.url : "cover_placeholder.jpg"
    image_tag img, class: "img-thumbnail"

  end
end
