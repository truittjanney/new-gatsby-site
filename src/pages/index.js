import React from 'react';
import Layout from '../pages/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../pages/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
              alt="Many planets in space"
              src="../images/space-image.avif" />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage;
