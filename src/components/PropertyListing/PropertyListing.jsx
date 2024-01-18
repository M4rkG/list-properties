import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const notFoundText = 'No properties found.';

const PropertyListing = ({ properties }) => {
    if (!properties || properties.length === 0) return <p>{notFoundText}</p>

    return (
        <ul className="PropertyListing">
            {properties
                .slice(0, 5)
                .map((property) => (
                    <li key={property.id}>
                        <PropertyCard {...property} />
                    </li>
                ))}
        </ul>
    );
};

export default PropertyListing;
