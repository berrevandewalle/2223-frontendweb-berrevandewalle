import Error from '../Error';
import Loader from '../Loader';
import {React, useState, useMemo,useCallback, useContext, useEffect} from 'react';
import Fietsen from './Fietsen';
import { Link } from 'react-router-dom';
import { FIETSEN_DATA } from '../../api/mock-data';
import { ThemeContext } from '../../contexts/Theme.context';
import useFietsen from '../../api/fietsen';
import useFotos from '../../api/fotos';


function FietsenTable({
  fietsen, fotos, id, onEdit, onDelete
}) {
  const { theme } = useContext(ThemeContext);
  if (fietsen.length === 0) {
    return (
      <div className="alert alert-info">
          There are no bikes yet.
      </div>
    );
  }


  return (
    <div>
      <table className={`table table-hover table-responsive table-${theme} `}>
        <thead>
          <tr>
            <th>Naam</th>
            <th>prijs</th>
            <th>kleur</th>
            <th>Fiets</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {fietsen.map((fiets) => (
            <Fietsen key={fietsen.id} {...id} {...fiets} 
             onDelete={onDelete} onEdit={onEdit} />
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default function FietsenList() {

  const fietsenApi = useFietsen();
  const fotosApi = useFietsen();
  const [fietsen, setFietsen] = useState([]);
  const [fotos, setFotos] = useState([]);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentFiets, setCurrentFiets] = useState({});
  const [currentFotots, setCurrentFotos] = useState({});

  const refreshFietsen = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fietsenApi.getAll();
      setFietsen(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshFotos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fotosApi.getAll();
      setFotos(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshFietsen();
    refreshFotos;
  }, [refreshFietsen, refreshFotos]);

  const handleDelete = useCallback(async (idToDelete) => {
    try {
      setError(null);
      await fietsenApi.deleteById(idToDelete);
      // of gewoon opnieuw ophalen
      setFietsen((fietsen) => fietsen.filter(({ id }) => id !== idToDelete));
    } catch (error) {
      console.error(error);
      setError(error);
    }

    try {
      setError(null);
      await fotosApi.deleteById(idToDelete);
      // of gewoon opnieuw ophalen
      setFotos((fotos) => fotos.filter(({ id }) => id !== idToDelete));
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }, []);

  const setFietsToUpdate = useCallback((id) => {
    setCurrentFiets(id === null ? {} : fietsen.find((f) => f.id === id));
  }, [fietsen]);

  const setFotosToUpdate = useCallback((id) => {
    setCurrentFotos(id === null ? {} : fotos.find((f) => f.id === id));
  }, [fotos]);
  //...



  const filteredFietsen = useMemo(() => fietsen.filter((f) => {
    return f.name.toLowerCase().includes(search.toLowerCase());
  }), [search, fietsen])

  const filteredFotos = useMemo(() => fotos.filter((f) => {
    return f.name.toLowerCase().includes(search.toLowerCase());
  }), [search, fotos])

  

  return (
    <>
    <center>
      <h1>Fietsen</h1>
      <div className="input-group mb-3 w-50">
        <input type="search" id="search" className="form-control rounded" placeholder="Zoeken"
         value={text} onChange={(e) => setText(e.target.value)} />
        <button type="button" className="btn btn-outline-primary" onClick={() => setSearch(text)}>Zoeken</button>
        <Link className="btn btn-primary" to="/fietsen/add">fiets toevoegen</Link>
      </div>
      <div className="mt-4">
        <Loader loading={loading} />
        <Error error={error} />
        {!loading && !error ? <FietsenTable fietsen={filteredFietsen} fotos={filteredFotos} id={fietsen} onDelete={handleDelete} onEdit={setFietsToUpdate} /> : null}
      </div>
    </center>
    </>)
    ;
}