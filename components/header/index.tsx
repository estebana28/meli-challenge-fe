import React from 'react'
import Image from 'next/image'
import { InputTextField } from '../../ui/input'
import { Root, Container, StyledImage } from "./styled"
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  search: string,
}

function HeaderComponent() {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<Inputs>({
    mode: 'onChange',
  });
  const handleInputSearch: SubmitHandler<Inputs> = data =>  {
      
      console.log(data);
    }
  
    //console.log(watch("search"))

  return (
    <Root>
      <Container columnSpacing={3}>
        <Grid item xs="auto">
          <Image src="/assets/Logo_ML.png" alt='mercadolibre logo' height={32} width={48} />
        </Grid>
        <Grid item xs={9}>
          <form onSubmit={handleSubmit(handleInputSearch)}>
            <InputTextField placeholder='Nunca dejes de buscar' 
              {...register("search")}  type="text" InputProps={{ endAdornment: <InputAdornment position="end">
                <IconButton type="submit">
                  <SearchIcon  />
                </IconButton>
              </InputAdornment>}}

            />
          </form>
        </Grid>
      </Container>
    </Root>
  );
}

export default HeaderComponent