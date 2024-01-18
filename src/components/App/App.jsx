import React, {useCallback, useEffect, useState} from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import {getProperties} from "../../api/properties";

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
