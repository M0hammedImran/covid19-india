import React, { useState, useEffect } from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const DistrictSearch = ({ className, data, handleDistrictChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const [districts, setDistricts] = useState([]);

  let allDistricts = [];

  useEffect(() => {
    const fetchDistrict = async () => {
      await data.forEach(dist => allDistricts.push(Object.keys(dist)[0]));
      setDistricts(allDistricts);
    };
    fetchDistrict();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleChange = (event) => {
    const { value } = event.target;
    handleDistrictChange(value);
    setSelectedValue(value)
  }

  return (
    <div className={className.name}>
      <FormControl>
        <InputLabel >Districts</InputLabel>
        <Select value={selectedValue || 'Karnataka'} onChange={handleChange}>
          <MenuItem value="Karnataka">
            <em>Karnataka</em>
          </MenuItem>
          {districts.map((district, index) =>
            <MenuItem key={index} value={district}>
              {district}
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  )
}

export default DistrictSearch;

