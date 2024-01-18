import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = ({ properties }) => {
    return (
        <ul className="PropertyListing">
            {properties
                .map((property, index) => (
                    <li key={property.id}>
                        <PropertyCard {...property} />
                    </li>
                ))}
        </ul>
    );
};

export default PropertyListing;
