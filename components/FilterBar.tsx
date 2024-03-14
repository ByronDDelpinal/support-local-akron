export default function FilterBar({ categories }: any) {
  return (
    <div className="facets">
      {categories.map((category: any) => (
        <button
          key={category.name}
          className={`facet${category.selected ? ' selected' : ''}`}
          // onClick={() => filterBusinesses(category.name)}
        >
          {category.name}
        </button>
      ))}
      <select
        className="facet"
        id="sort-by"
        // onChange={(event) => sortBusinesses(event.target.value)}
      >
        <option value="">Sort By ▼</option>
        <option value="asc">Sort: A-Z</option>
        <option value="desc">Sort: Z-A</option>
      </select>
    </div>
  );
}
