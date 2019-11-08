import React from "react"
import PrimaryLayout from "../layout/PrimaryLayout"
import Post from "../components/Post"
import {graphql} from "gatsby"


export default ({data}) => {
    return (
            <PrimaryLayout column="col-10">
              
                {data.allWordpressPost.nodes.map(node => (
                <Post 
                image={node.featured_media.source_url}
                title={node.title} 
                excerpt={node.excerpt} 
                readMore={node.slug}
                />
                ))}
            </PrimaryLayout>
        
    )
   
}

export const query = graphql`
{
  allWordpressPost {
    nodes {
      slug
      title
      excerpt
      featured_media {
        source_url
      }
    }
  }
}
`

