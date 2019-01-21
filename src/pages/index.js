import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Hero from '../components/hero'
import TeamMember from '../components/team-member'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const team = get(this, 'props.data.allContentfulPerson.edges')
    const company =  get(this, 'props.data.contentfulCompany')

    return (
      <main role="main">
        <Helmet>
          <title>Brickbase</title>
        </Helmet>
        <Hero data={company} />

        {/* What we do */}
        <div className="row text-center section section-what-we-do">
          <div className="container text-center">
            <h3>What does Brickbase do?</h3>
            <div className="row">
              <div className="col-md-4">
              <h4>Securitization</h4>
              <small>
              Brickbase does something very simple, that yet cannot be found on international markets:

Real Estate Securitization.

REITs and real estate funds are pools of properties, spread across a country or across the globe, and very often the investment product is not even real estate!</small>
              </div>
              <div className="col-md-4">
                <span className="icon-liquidity"></span>
                <h4>Liquidity</h4>
                <small>
                Liquidity is not an attribute that appeals only to investors and financial practitioners: greater liquidity means cheaper cost of funding for property development projects. Greater liquidity in the real estate market would also have a tempering effect on the credit crunch that comes with periods of financial crisis
                </small>
              </div>
              <div className="col-md-4">
                <h4>Simplicity</h4>
                <small>
                While investing in the shareholders' capital of a company can be done through a simple "Buy" order on a stock exchange, investing in real estate is a much more bureaucratic process.

Brickbase deconstructs the sales and purchase of real estate into a seamless process. Less bureaucracy, more investment.
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="row text-center section section-team">
          <div className="container text-center">
            <h3>Meet our team</h3>
            <div className="row">
                {team.map(({ node }) => {
                  return (
                    <TeamMember member={node} />
                  )
                })}
            </div>
          </div>
        </div>

        {/* Partners */}
        {/* <div className="row text-center section section-partners">
          <div className="container text-center">
            <h3>Our Partners</h3>
            <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="row">
                    {partners.map(({ node }) => {
                      return (
                        <div key={node.id} className="col-md-6">
                          <a href={node.website} target="_blank">
                            <img src={node.image.file.url} className="img-responsive" />
                          </a>
                        </div>
                      )
                    })}
                  </div>
                </div>
            </div>
          </div>
        </div> */}

        {/* Career */}
        <div className="row text-center section section-career">
          <div className="container text-center">
            <h3>We are Hiring</h3>
            <div className="row">
              <div className="col-md-7 mx-auto">
                <p>Our vision is to become the reference for real estate investment, and we are just getting started.</p>
                <p>We're looking for ambitious talents to join our team and build awesomeness.</p>
                <p>What kind of profile are we looking for? We want smart, dynamic and ambitious people who want to get first-hand experience in building a venture from the ground up.</p>
                <br />
                <a href="https://angel.co/brickbase/jobs/428556-tech-cofounder" target="_blank" role="button" className="btn btn-white text-center">SEE OPENINGS</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="row text-center section section-footer">
          <div className="container text-center">
            <h3><a href="mailto:info@brickbase.io">info@brickbase.io</a></h3>

            <embed src="/images/footer_img.svg" className="footer-image" />
          </div>
        </div>
      </main>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulCompany {
      name
      tagline
    }
    allContentfulPerson {
      edges {
        node {
          id
          name,
          title,
          shortBio {
            shortBio
          },
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
    allContentfulPartners {
      edges {
        node {
          id
          name
          website
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
