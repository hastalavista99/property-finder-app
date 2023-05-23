module PostsHelper
  def post_thumbnail_url post
    img = post.image.present? ? post.image.thumb.url : "blog_latest.jpg"
    image_tag img, class: "property-thumb"

  end
end
