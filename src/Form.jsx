import React from 'react';
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function Form(props) {
    const {
        register,
        formState: {
            errors,
        },
        reset,
        handleSubmit,
    } = useForm({
        mode: "onBlur"
    })

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
                autoComplete="off"
            >

                <TextField type="text"
                           variant={"outlined"}
                           label={"Login"}
                           style={{width: "100%", margin: 0, marginTop: 15}}
                           error={!!errors?.login}
                           helperText={errors?.login ? errors.login.message : null}
                           {...register('login', {
                               required: 'Поле обязательно к зополнению',
                           })}
                />

                <TextField type="text"
                           variant={"outlined"}
                           label={"Email"}
                           style={{width: '100%', margin: 0, marginTop: 15}}
                           error={!!errors?.email}
                           helperText={errors?.email ? errors.email.message : null}
                           {...register('email', {
                               required: 'Поле обязательно к зополнению',
                           })}
                />
                <TextField type="password"
                           variant={"outlined"}
                           label={"Password"}
                           style={{width: "100%", margin: 0, marginTop: 15}}
                           error={!!errors?.Password}
                           helperText={errors?.Password ? errors.Password.message : null}
                           {...register('Password', {
                               required: 'Поле обязательно к зополнению',
                           })}
                />
                <Button variant="contained"
                        type="submit"
                        style={{width: '100%', backgroundColor: "#7851f7", color: '#fff', height: 40, marginTop: 15}}

                >Отправить запрос</Button>
            </Box>
        </Container>
    )
}
//
// <div style={{height: 40}}>
//     {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
// </div>

export default Form;