import {
  useAuth0,
} from '@auth0/auth0-react';
import axios from 'axios';
import {
  useCallback,
} from 'react';

const baseUrl = `${process.env.REACT_APP_API_URL}/fotos`;

const useFotos = () => {
  const {
    getAccessTokenSilently,
  } = useAuth0();

  const getAll = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const {
      data,
    } = await axios.get(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.items;
  }, [getAccessTokenSilently]);


  const getById = useCallback(async (id) => {
    const token = await getAccessTokenSilently();
    const {
      data,
    } = await axios.get(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }, [getAccessTokenSilently]);


  const deleteById = useCallback(async (id) => {
    const token = await getAccessTokenSilently();
    await axios.delete(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, [getAccessTokenSilently]);

  const save = useCallback(async (fotos) => {
    const token = await getAccessTokenSilently();
    const {
      id,
      ...values
    } = fotos;
    await axios({
      method: id ? 'PUT' : 'POST',
      url: `${baseUrl}/${id ?? ''}`,
      data: values,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, [getAccessTokenSilently]);
  return {
    getAll,
    getById,
    save,
    deleteById,
  };
};

export default useFotos;