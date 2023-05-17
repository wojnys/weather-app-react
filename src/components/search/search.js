import React from 'react'
import { useState } from 'react'
import './search.css'
import { AsyncPaginate } from 'react-select-async-paginate'
import { options, apiURL } from '../api/api'
import axios from 'axios'

export const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);
    
    const loadOptions = (inputValue) => {
        return fetch(
          `${apiURL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            return {
              options: response.data.map((city) => {
                //vracime object s hodnotou a popiskem
                return {
                  value: `${city.latitude} ${city.longitude}`,
                  label: `${city.name}, ${city.countryCode}`,
                };
              }),
            };
          });
      };
    

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        console.log(search);
        onSearchChange(searchData);
    }

      //fetchBuildingImage("Prague");

  return (
    <div className='searchContainer'>
    <AsyncPaginate className='searchBar'
        placeholder="Seach for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}>
    </AsyncPaginate>

    </div>
  )
}
