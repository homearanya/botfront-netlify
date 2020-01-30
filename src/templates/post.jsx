/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";
import Navbar from "../components/Navbar/Navbar";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Navbar />
        <div className="post-wrapper">
          <div className="post-container">
            <h1 className="title">{post.title}</h1>
            {/* <h3 className="subtitle is-muted">{post.title}</h3> */}
            <br />
            <img src={`images/posts/${post.cover}`} className="cover" />
            <br />
            <br />
            <div className="post-body">
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              <div className="post-meta">
                {/* <PostTags tags={post.tags} /> */}
                <br />
                <SocialLinks postPath={slug} postNode={postNode} />
                <br />
              </div>
            </div>
          </div>
        </div>
        <Footer config={config} />
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
