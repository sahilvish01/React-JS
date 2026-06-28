// Form using React Hook Form

import {useForm} from "react-hook-form";

export default function Form1()
{
  
    const {register, handleSubmit, formState:{errors}} = useForm();

    function submitForm(data)
    {
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" {...register("name",{required:"Name can't be empty"})} />
                {errors.name && <div>{errors.name.message}</div>}
            </div>
                
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" {...register("email",{required:"Email can't be empty"})} />
                {errors.email && <div>{errors.email.message}</div>}
            </div>

            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" {...register("password",{required:"Password can't be empty"})}/>
                {errors.password && <div>{errors.password.message}</div>}
            </div>

            <button type="submit">Submit</button>
        </form>
    )

}