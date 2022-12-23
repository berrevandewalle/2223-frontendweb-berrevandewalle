import {React, useState, useMemo,useCallback, useContext} from 'react';
import { FIETSEN_DATA } from '../../api/mock-data';
import Overzicht from './Overzicht';
import Fietsen from '../Fietsen/Fietsen';
import { ThemeContext } from '../../contexts/Theme.context';

function OverzichtTable({
  fietsen
}) {
  const { theme } = useContext(ThemeContext);
  if (fietsen.length === 0) {
    return (
      <div className="alert alert-info">
          There are no bikes with this name yet.
      </div>
    );
  }

  return (
    <div>
      <table className={`table table-hover table-responsive table-${theme} `}>
        <thead>
          <tr>
            <th><h5>Naam</h5></th>
            <th>prijs</th>
            <th>kleur</th>
            <th>Fiets</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {fietsen.map((fiets) => (
            <Overzicht key={fietsen.id} {...fiets} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function OverzichtList() {

  const [fietsen, setFietsen] = useState(FIETSEN_DATA);
    const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const filterFietsen = useMemo(() => fietsen.filter((f) => {
    return f.name.toLowerCase().includes(search.toLowerCase());
  }), [search, fietsen])


  return (
    <>
    <center>
      <h1>Overzicht Fietsen</h1>
      <div className="input-group mb-3 w-50 ">
        <input type="search" id="search" className="form-control rounded me-2" placeholder="Zoeken"
         value={text} onChange={(e) => setText(e.target.value)} width="200"/>
        <button type="button" className="btn btn-outline-primary" onClick={() => setSearch(text)}>Zoeken</button>

      {/* <form action={soortFietsen}>
        <h4 for="sort">Sorteren op: </h4>
        <select id="sort" name="sort">
        <option value="Road" >Road</option>
          <option value="Road" >Road</option>
          <option value="Time trial" >Time trial</option>
          <option value="Off road" >Off road</option>
        </select>
      </form> */}
      </div>
      <div className="mt-4">
        <OverzichtTable fietsen={filterFietsen} />
      </div>
    </center>
    </>);
}