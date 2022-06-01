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
            isValid,
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
                           label={"First Name"}
                           style={{width: '100%'}}
                           helperText={"Поле обязательно к зополнению"}
                           {...register('firstName', {
                               minLength: {
                                   value: 5,
                                   message: "Минимум 5 символов",
                               },
                           })}
                />
                <div style={{height: 40}}>
                    {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
                </div>

                <TextField type="text"
                           variant={"outlined"}
                           label={"Last Name"}
                           style={{width: '100%'}}
                           {...register('lastName', {
                               required: 'Поле обязательно к зополнению',
                               minLength: {
                                   value: 5,
                                   message: "Минимум 5 символов",
                               },
                           })}
                />
                <div style={{height: 40}}>
                    {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
                </div>
                <TextField type="password"
                           variant={"outlined"}
                           label={"Password"}
                           style={{width: '100%'}}
                           {...register('password', {
                               required: 'Поле обязательно к зополнению',
                               minLength: {
                                   value: 8,
                                   message: "Минимум 8 символов",
                               },
                           })}
                />
                <div style={{height: 40}}>
                    {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                </div>
                <Button variant="outlined"
                        type="submit"
                        style={{width: '100%', backgroundColor: "#7851f7", color: '#fff', height: 40}}

                >Отправить запрос</Button>
            </Box>
        </Container>
    )
}

export default Form;