import React from 'react';
import Layout from '../pages/layout'
import Seo from '../pages/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi, my name is Truitt. I am a software developer with a background in sales and marketing.
                I've always had a love for technology and decided to make this my new career.</p>
                </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage