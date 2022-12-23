import { useThemeColors } from '../../contexts/Theme.context';
import {React, useCallback, memo} from 'react';
import { GetColorName } from 'hex-color-to-color-name';

const amountFormat = new Intl.NumberFormat('nl-BE', {
  currency: 'EUR',
  style: 'currency',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

export default memo (function Overzicht({
  name, price, color, sort,  picture
}){

  const cname = GetColorName(color); 
  return (
    <tr>
    <td width="10%">
      {name}
    </td>
    <td width="10%">{amountFormat.format(price)}</td>
    <td width="10%">{cname}</td>
    <td width="10%">{sort}</td>
    <td><img src={picture} name={name} width="75%" height="75%"/></td>
    <td>
      <div className="btn-group float-end">
      </div>
    </td>
  </tr>
);
})

