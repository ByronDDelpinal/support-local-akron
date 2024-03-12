'use client';
import data from '@/data.json';
import { BusinessCard } from '@/components/BusinessCard';
import { useState } from 'react';

export default function Businesses() {
  const getUniqueCategories = () => {
    const allCategories = Array.from(data.businesses).map(
      (business) => business.category
    );

    allCategories.unshift('all');

    const uniqueCategories = allCategories.filter(
      (value, index, self) => self.indexOf(value) === index
    );

    const uniqueObjects = uniqueCategories.map((category) => ({
      name: category,
      selected: category === 'all' ? true : false,
    }));

    return uniqueObjects;
  };

  const setCategoryToActive = (categoryName: string) => {
    const newCategories = Array.from(categories);

    newCategories.map((newCategory) => {
      newCategory.selected = newCategory.name === categoryName;
      return newCategory;
    });

    setCategories(newCategories);
  };

  const filterBusinesses = (categoryName: string) => {
    // Handle "All" separately since it's a reset
    if (categoryName === 'all') {
      // This goes back to the default
      setCategoryToActive(categoryName);
      setBusinesses(data.businesses);
      return;
    }

    const allBusinesses = Array.from(data.businesses);

    const filteredBusinesses = allBusinesses.filter(
      (business) =>
        business.category.toLowerCase() === categoryName.toLowerCase()
    );

    setCategoryToActive(categoryName);
    setBusinesses(filteredBusinesses);
  };

  const sortBusinesses = (direction: string) => {
    if (!direction) {
      // This goes back to the default
      setBusinesses(data.businesses);
      return;
    }

    const sortedBusinesses = Array.from(businesses).sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase

      if (direction === 'asc') {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;

        return 0;
      }

      if (nameA < nameB) return 1;
      if (nameA > nameB) return -1;

      return 0;
    });

    setBusinesses(sortedBusinesses);
  };

  const [businesses, setBusinesses] = useState(data.businesses);
  const [categories, setCategories] = useState(getUniqueCategories());

  return (
    <div className="business-index-page">
      <div className="container">
        <div className="pad-20 text-center">
          <h2 className="section-title">{businesses.length} Local Listings</h2>
        </div>
        <div className="facets">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`facet${category.selected ? ' selected' : ''}`}
              onClick={() => filterBusinesses(category.name)}
            >
              {category.name}
            </button>
          ))}
          <select
            className="facet"
            id="sort-by"
            onChange={(event) => sortBusinesses(event.target.value)}
          >
            <option value="">Sort By ▼</option>
            <option value="asc">Sort: A-Z</option>
            <option value="desc">Sort: Z-A</option>
          </select>
        </div>
        <ul className="article-list row">
          {businesses.map((business) => {
            return (
              <li
                data-type={business.type}
                key={business.slug}
                className="col-lg-6"
              >
                <BusinessCard business={business} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
