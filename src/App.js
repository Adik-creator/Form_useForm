import {useForm} from "react-hook-form";
import './App.css';

function App() {

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
        <div className="formContainer">
            <h1>Auth</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>
                    First Name
                    <input type="text"
                           {...register('firstName', {
                               required: 'Поле обязательно к зополнению',
                               minLength: {
                                   value: 5,
                                   message: "Минимум 5 символов",
                               },
                           })}
                    />
                    <div style={{height: 40}}>
                        {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
                    </div>
                </label>

                <label>
                    Last Name
                    <input type="text"
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
                </label>

                <label>
                    Password
                    <input type="password"
                           {...register('password', {
                               required: 'Поле обязательно к зополнению',
                               minLength: {
                                   value: 8,
                                   message: "Минимум 8 символов",
                               },
                           })}
                    />
                    <div style={{height: 40}}>
                        {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
                    </div>
                </label>
                <input type="submit" disabled={!isValid}/>
            </form>
        </div>
    );
}

export default App;
