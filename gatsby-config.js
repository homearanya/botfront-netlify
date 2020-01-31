const urljoin = require("url-join");
const path = require("path");
const config = require("./data/SiteConfig");

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix
      )}/logos/logo-512.png`,
      copyright: config.copyright
    }
  },
  plugins: [
    {
      resolve: "gatsby-theme-docz",
      options: {
        gatsbyRemarkPlugins: [
          { resolve: "gatsby-remark-autolink-headers" },
          { resolve: "gatsby-remark-copy-linked-files" },
          { resolve: "gatsby-remark-embed-youtube" },
          { resolve: "gatsby-remark-external-links" },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              quality: 80,
              withWebp: true
            }
          },
          { resolve: "gatsby-remark-responsive-iframe" },
          { resolve: "gatsby-remark-smartypants" }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/images/favicon.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "en-US",
        background: "#fff",
        theme_color: "#fff",
        display: "standalone",
        orientation: "any",
        //   start_url: '/?homescreen=1',
        version: "1.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`800`, `600`]
          },
          {
            family: `Roboto Mono`,
            variants: [`300`, `400`, `500`]
          },
          {
            family: `Open Sans`,
            subsets: [`latin`],
            variants: [`500`, `600`, `700`]
          },
          {
            family: `Lora`,
            subsets: [`latin`]
          },
          {
            family: `Source Sans Pro`,
            subsets: [`latin`],
            variants: [`400`, `600`, `800`]
          },
          {
            family: `Roboto`,
            variants: [
              `100`,
              `100italic`,
              `300`,
              `300italic`,
              `regular`,
              `500`,
              `700`
            ]
          },
          {
            family: `Hind`,
            variants: [`regular`, `700`, `900`]
          }
        ]
      }
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "assets",
    //     path: `${__dirname}/static/`
    //   }
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "posts",
    //     path: `${__dirname}/content/`
    //   }
    // },
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       {
    //         resolve: "gatsby-remark-embed-youtube",
    //         options: {
    //           width: 964,
    //           height: 600
    //         }
    //       },
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           showCaptions: true,
    //           maxWidth: 964
    //         }
    //       },
    //       {
    //         resolve: "gatsby-remark-external-links",
    //         options: {
    //           target: "_blank",
    //           rel: "nofollow"
    //         }
    //       },
    //       {
    //         resolve: "gatsby-remark-responsive-iframe"
    //       },
    //       "gatsby-remark-copy-linked-files",
    //       "gatsby-remark-autolink-headers",
    //       "gatsby-remark-prismjs"
    //     ]
    //   }
    // },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(docs)/
      }
    },
    "gatsby-plugin-twitter",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icons: [
          {
            src: "/logos/logo-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/logos/logo-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    // "gatsby-plugin-offline",
    "gatsby-plugin-remove-serviceworker"
    // {
    //   resolve: "gatsby-plugin-netlify-cms",
    //   options: {
    //     modulePath: path.resolve("src/netlifycms/index.js"), // default: undefined
    //     enableIdentityWidget: true,
    //     publicPath: "admin",
    //     htmlTitle: "Content Manager",
    //     includeRobots: false
    //   }
    // },
    // {
    //   resolve: "gatsby-plugin-feed",
    //   options: {
    //     setup(ref) {
    //       const ret = ref.query.site.siteMetadata.rssMetadata;
    //       ret.allMarkdownRemark = ref.query.allMarkdownRemark;
    //       ret.generator = "GatsbyJS Advanced Starter";
    //       return ret;
    //     },
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           rssMetadata {
    //             site_url
    //             feed_url
    //             title
    //             description
    //             image_url
    //             copyright
    //           }
    //         }
    //       }
    //     }
    //   `,
    //     feeds: [
    //       {
    //         serialize(ctx) {
    //           const { rssMetadata } = ctx.query.site.siteMetadata;
    //           return ctx.query.allMarkdownRemark.edges.map(edge => ({
    //             categories: edge.node.frontmatter.tags,
    //             date: edge.node.fields.date,
    //             title: edge.node.frontmatter.title,
    //             description: edge.node.excerpt,
    //             url: rssMetadata.site_url + edge.node.fields.slug,
    //             guid: rssMetadata.site_url + edge.node.fields.slug,
    //             custom_elements: [
    //               { "content:encoded": edge.node.html },
    //               { author: config.userEmail }
    //             ]
    //           }));
    //         },
    //         query: `
    //         {
    //           allMarkdownRemark(
    //             limit: 1000,
    //             sort: { order: DESC, fields: [fields___date] },
    //           ) {
    //             edges {
    //               node {
    //                 excerpt
    //                 html
    //                 timeToRead
    //                 fields {
    //                   slug
    //                   date
    //                 }
    //                 frontmatter {
    //                   title
    //                   cover
    //                   date
    //                   category
    //                   tags
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       `,
    //         output: config.siteRss
    //       }
    //     ]
    //   }
    // }
  ]
};
