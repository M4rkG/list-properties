import React, {useCallback, useEffect, useState} from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import {getProperties} from "../../api/properties";
import {array} from "prop-types";

const DUMMY_PROPERTY = {
  id: 73864112,
  bedrooms: 3,
  summary: 'Property 1 Situated moments from the River Thames in Old Chelsea...',
  displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
  propertyType: 'Flat',
  price: 1950000,
  branchName: 'M2 Property, London',
  propertyUrl: '/property-for-sale/property-73864112.html',
  contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
  propertyTitle: '3 bedroom flat for sale',
  mainImage:
    'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
};
const App = () => {
    const [properties, setProperties] = useState();

    const fetchProperties = useCallback(async () => {
      try {
        const results = await getProperties();
        const response = await results.json();
        setProperties(response);
      } catch (e) {
        console.log(e)
      }
    }, [])

    useEffect(() => {
      fetchProperties()
    }, [])

    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter />
                <PropertyListing properties={properties} />
            </main>
        </div>
    );
};

export default App;
