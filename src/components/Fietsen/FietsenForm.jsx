import Error from '../Error';
import Loader from '../Loader';
import {React,useEffect, useState} from 'react';
import useFietsen from '../../api/fietsen';
import useFotos from '../../api/fotos';
import { useNavigate, useParams } from 'react-router';
import { COLORS } from '../../api/mock-data';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

const validationRules = {
  name: {
      required: 'this is required',
      minLength: { value: 2, message: 'Min length is 2!' },
  },
  price: {
    valueAsNumber: true,
    required: 'this is required',
    min: { value: 1, message: 'min 1' },
    max: { value: 15000, message: 'the max price is 15000!' },
},
  color: { required: 'this is required' },
  sort: { required: 'this is required' },
  
};

function LabelInput({ label, name, type, ...rest }) {
  const {
      register,
      errors,
      isSubmitting
  } = useFormContext();

  const hasError = name in errors;
  if(name === "foto"){
    return(
        <div className="mb-3">
          <label htmlFor={name} className="form-label">
              {label}
          </label>
          <input
              {...register(name, validationRules[name])}
              fid={name}
              fname = "foto"
              type={type}
              className="form-control"
              disabled={isSubmitting}
              {...rest}
              accept= ".png, .webp"
          />
          {hasError ? (
              <div className="form-text text-danger">
                  {errors[name].message}
              </div>
          ) : null}
      </div>
    );
  }
  else{
  return (
      <div className="mb-3">
          <label htmlFor={name} className="form-label">
              {label}
          </label>
          <input
              {...register(name, validationRules[name])}
              id={name}
              type={type}
              className="form-control"
              disabled={isSubmitting}
              {...rest}
          />
          {hasError ? (
              <div className="form-text text-danger">
                  {errors[name].message}
              </div>
          ) : null}
      </div>
  );
    }
}


export default function FietsenForm(){

  const fietsenApi = useFietsen();
  const fotosApi = useFotos();
    const [error, setError] = useState(null);
    const [errorf, setErrorf] = useState(null);
    const [foto, setFoto] = useState('');
  const {setValue, register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = async (ggvns) => {
    const { name, price, sort, color, fid, fname } = ggvns;
    try {
        setError(null);
        await fietsenApi.save({
          id,
          name,
          price, 
          sort, 
          color
        });
        navigate('/');
      } catch (err) {
        setError(err);
      }

      try {
          setError(null);
          await fotosApi.save({
            fid,
            fname,
          });
          navigate('/');
        } catch (err) {
          setError(err);
        }
};
  
useEffect(() => {
    if (!id) {
      reset();
      return;
    }

    const fetchFiets = async () => {
      try {
        setError(null);
        const fiets = await fietsenApi.getById(id);
        setValue('name', fiets.name);
        setValue('price', fiets.price);
        setValue('sort', fiets.sort);
        setValue('color', fiets.color);
      } catch (err) {
        setError(err);
      }
    };

    const fetchFoto = async () => {
      try {
        setErrorf(null);
        const foto = await fotosApi.getById(id);
        setValue('naam', foto.naam);
      } catch (err) {
        setError(err);
      }
    };

    

    fetchFiets();
    fetchFoto();
  }, [id, setValue, reset]);

  return (
    <>
            <h2 className='w-50 mb-3 container'>
            {id
               ? "fiets aanpassen"
               : "fiets toevoegen"}
            </h2>
            <Error error={error} className='w-50 mb-3 container'/>

            <FormProvider handleSubmit={handleSubmit}
             errors={errors}
             register={register}
             isSubmitting={isSubmitting}>
                
                <form onSubmit={handleSubmit(onSubmit)} className="w-50 mb-3 container">
                    <LabelInput
                        label="name"
                        name="name"
                        type="name" 
                        data-cy="name_input"/>

                    <LabelInput
                        label="price"
                        name="price"
                        type="price" 
                        data-cy="price_input"/>

                    <LabelInput
                        label="sort"
                        name="sort"
                        type="sort"
                        data-cy="sort_input" />

                    <LabelInput
                        label="color"
                        name="color"
                        type="color" 
                        data-cy="color_input"/>

                        <LabelInput
                            label="picture"
                            name="foto"
                            type="file"
                            data-cy="foto_input"
                            enctype="mulipart/form-data"
                        />

                    <div className="clearfix">
                        <div className="btn-group float-end">
                            <button
                                type="submit"
                                disabled={isSubmitting} 
                                className="btn btn-primary"
                                data-cy="submit_fiets"
                            >
                            {' '}
                            {id
                                ? "fiets opslaan"
                                : "fiets toevoegen"}</button>
                        </div>
                    </div>
                    <div></div>
                </form>
            </FormProvider>
        </>
  )}