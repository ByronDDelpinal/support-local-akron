'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function FilterBar({ categories }: any) {
  const params = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSort = (value: string) => {
    const newParams = new URLSearchParams(params.toString());
    if (!value) {
      newParams.delete('sortOrder');
    } else {
      newParams.set('sortOrder', value);
    }
    replace(`${pathname}?${newParams.toString()}`);
  };

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
      <select className="facet" onChange={(e) => handleSort(e.target.value)}>
        <option value="">Sort By ▼</option>
        <option value="asc">Sort: A-Z</option>
        <option value="desc">Sort: Z-A</option>
      </select>
    </div>
  );
}
