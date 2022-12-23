import {React, useCallback, memo} from 'react';
import { GetColorName } from 'hex-color-to-color-name';
import { IoTrashOutline, IoPencil } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FIETSEN_DATA } from '../../api/mock-data';

const amountFormat = new Intl.NumberFormat('nl-BE', {
  currency: 'EUR',
  style: 'currency',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});



export default memo (function Fietsen({
 id, name, price, sort, color, foto, onDelete, onEdit
}){

  const handleDelete = useCallback((event) => {
    event.preventDefault();
    onDelete(id);
  }, [id, onDelete]);

  const handleUpdate = useCallback((event) => {
    event.preventDefault();
    onEdit(id);
  }, [id, onEdit]);

  const cname = GetColorName(color); 

  FIETSEN_DATA.map((f)=>{f.id === id ? foto = f.picture : ''})

  return (
    <tr>
    <td width="6%">
      {name}
    </td>
    <td width="6%">{amountFormat.format(price)}</td>
    <td width="6%">{cname}</td>
    <td width="6%">{sort}</td>
    <td width="16%"><img src={foto}  width="75%" height="75%"/></td>
    <td width="6%">
      <div className="btn-group float-end">
      <button type="button" className="btn btn-light" onClick={handleUpdate}>
        <Link data-cy="fiets_edit_btn" type="button" className="btn btn-light" to={`/fietsen/edit/${id}`}>
            <IoPencil />
        </Link>
          </button>
          <button type="button" className="btn btn-danger" onClick={handleDelete}>
            <IoTrashOutline />
          </button>
      </div>
    </td>
  </tr>
);
})
