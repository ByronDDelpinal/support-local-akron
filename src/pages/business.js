import React, { useState } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import BusinessPreviewList from "../components/business-preview-list"
import { graphql } from "gatsby"

function BusinessIndex(props) {
  const siteTitle = props.data.site.siteMetadata.title
  const [businesses, setBusinesses] = useState(
    props.data.allContentfulBusinesses.nodes
  )

  const getUniqueCategories = () => {
    const allCategories = Array.from(
      props.data.allContentfulBusinesses.nodes
    ).map(business => business.category)

    allCategories.unshift('all');

    const uniqueCategories = allCategories.filter(
      (value, index, self) => self.indexOf(value) === index
    )

    const uniqueObjects = uniqueCategories.map(category => (
      { name: category, selected: (category === 'all') ? true : false }
    ));

    return uniqueObjects;
  }

  const setCategoryToActive = categoryName => {
    const newCategories = Array.from(categories);

    return newCategories.map(newCategory => {
      newCategory.selected = (newCategory.name === categoryName);
      return newCategory;
    })

    setCategories(newCategories);
  }

  const filterBusinesses = categoryName => {
    const sortByElement = document.querySelector('#sort-by');
    if (categoryName === "all") {
      // This goes back to the default
      setCategoryToActive(categoryName)
      setBusinesses(props.data.allContentfulBusinesses.nodes)
      if (sortByElement) sortByElement.value = '';
      return
    }

    const allBusinesses = Array.from(props.data.allContentfulBusinesses.nodes)

    const filteredBusinesses = allBusinesses.filter(
      business => business.category.toLowerCase() == categoryName.toLowerCase()
    )

    if (sortByElement) sortByElement.value = '';

    setCategoryToActive(categoryName)

    setBusinesses(filteredBusinesses)
  }

  const sortBusinesses = direction => {
    if (!direction) {
      // This goes back to the default
      setBusinesses(props.data.allContentfulBusinesses.nodes)
      return
    }

    const sortedBusinesses = Array.from(businesses).sort((a, b) => {
      const nameA = a.name.toUpperCase() // ignore upper and lowercase
      const nameB = b.name.toUpperCase() // ignore upper and lowercase

      if (direction === "asc") {
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1

        return 0
      }

      if (nameA < nameB) return 1
      if (nameA > nameB) return -1

      return 0
    })

    setBusinesses(sortedBusinesses)
  }

  const [categories, setCategories] = useState(getUniqueCategories())

  return (
    <div class="business-index-page">
      <Helmet title={siteTitle} />
      <Layout>
        <div className="container">
          <div className="text-center pad-20">
            <h2 className="section-title">Local Businesses</h2>
          </div>
          <div className="facets">
            {categories.map(category => (
              <button className={`facet${ category.selected ? ' selected' : ''}`} onClick={() => filterBusinesses(category.name)}>
                {category.name}
              </button>
            ))}
            <select
              className="facet"
              id="sort-by"
              onChange={event => sortBusinesses(event.target.value)}
            >
              <option value="">Sort By  ▼</option>
              <option value="asc">Sort: A-Z</option>
              <option value="desc">Sort: Z-A</option>
            </select>
          </div>
          <BusinessPreviewList businesses={businesses} />
        </div>
      </Layout>
    </div>
  )
}

export default BusinessIndex

export const pageQuery = graphql`
  query LocalBusinessQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBusinesses {
      nodes {
        category
        id
        name
        image {
          file {
            url
          }
          fluid(maxWidth: 1800) {
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
        supportSummary {
          json
        }
        type
        urlName
        website
      }
    }
  }
`
