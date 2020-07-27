import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

const Districts = ({ data }) => {
  let districts = []
  data.forEach(dist => districts.push(Object.keys(dist)[0]));
  return (
    <div><FormControl>
      <NativeSelect>
        <option value=''>Karnataka</option>
        {districts.map((district, index) =>
          <option key={index} value={district}>
            {district}
          </option>
        )}
      </NativeSelect>
    </FormControl>
    </div>
  )
}

export default Districts;