/* eslint-disable class-methods-use-this */
import React from "react";
import { Link } from "gatsby";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  renderCard(post) {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="is-3by1">
            <img className="image" src={post.cover} alt={post.title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-2">{post.title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
          postList.map(post => (
            <>
              <Link to={`/blog/${post.path}`} key={post.title}>
                {this.renderCard(post)}
              </Link>
              <br />
            </>
          ))
        }
      </div>
    );
  }
}

export default PostListing;
