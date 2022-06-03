import React from 'react';
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    login: yup.string().required('Поле обязательно к зополнению!'),
    email: yup.string().email().required('Поле обязательно к зополнению!'),
    password: yup.string().min(4).max(10).required('Поле обязательно к зополнению!'),
}).required("Error!");

const styles = {width: '100%', margin: 0, marginTop: 15}

function Form(props) {
    const { register, handleSubmit, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset()
    }


    return (
        <Container maxWidth="sm">
            <h1>Auth</h1>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form" sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            >

                <TextField type="text"
                           variant={"outlined"}
                           label={"login"}
                           style={styles}
                           error={!!errors?.login}
                           helperText={errors?.login && <p>{errors?.login?.message || "Error!"}</p>}
                           {...register('login')}
                />

                <TextField type="text"
                           variant={"outlined"}
                           label={"email"}
                           style={styles}
                           error={!!errors?.email}
                           helperText={errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                           {...register('email')}
                />
                <TextField type="password"
                           variant={"outlined"}
                           label={"password"}
                           style={styles}
                           error={!!errors?.password}
                           helperText={errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                           {...register('password')}
                />
                <Button variant="contained"
                        type="submit"
                        style={{width: '100%', backgroundColor: "#7851f7", color: '#fff', height: 40, marginTop: 15}}

                >Отправить запрос</Button>
            </Box>
        </Container>
    )
}

export default Form;