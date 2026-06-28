// React Hook Form + Zod + regex Expression

// Browser by defaut saare format ko as string hi consider karta hai
// Ham password ko string format mein hi store karate hai taki, agar uske aage 0 etc ho to use bhi include karke as password rakhe agar number mein karenge to aage zero hata dega
// Aisi saari cheej jisme maths ki calculation nahi karni hai like phone number, pin, password sabko as string format hi store karenge

import {z} from "zod";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"

export default function Form2()
{

    const formSchema = z.object({
        name: z.string().regex(/^[a-zA-Z\s]+$/,"Name is invalid").min(3,"Name is too short").max(20,"Max Character is 20"),
        email: z.string().email("Email is invalid"),
        phone: z.string().regex(/^[6-9]\d{9}$/,"Phone number is not in Indian format"),
        password: z.string().regex(/[a-z]/,"include any character between a-z").regex(/[A-Z]/,"include any character from A-Z").regex(/[0-9]/,"include any digit from 0-9").regex(/[^(a-zA-Z0-9)]/,"include a speacial character (eg. @,& etc)").max(10, "Password is too long").min(4, "Password is too short"),
        confirm: z.string()    
    })
    .refine(data => data.password == data.confirm, {
        error: "Password didn't match",
        path: ["confirm"]
    })

    const {register, handleSubmit, formState:{errors}} = useForm(
        {
            resolver:zodResolver(formSchema)
        }
    )

    function submitForm(data)
    {
        console.log(data); 
    }

    return(
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" {...register("name")} />
                {errors.name && <div style={{color:"red", fontSize:"0.5rem"}}>{errors.name.message}</div>}
            </div>

            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" {...register("email")}/>
                {errors.email && <div style={{color:"red", fontSize:"0.5rem"}}>{errors.email.message}</div>}
            </div>

            <div>
                <label htmlFor="phone">Phone: </label>
                <input type="text" name="phone" id="phone" {...register("phone")} />
                {errors.phone && <div style={{color:"red", fontSize:"0.5rem"}}>{errors.phone.message}</div>}
            </div>

            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" {...register("password")}/>
                {errors.password && <div style={{color:"red", fontSize:"0.5rem"}}>{errors.password.message}</div>}
            </div>

            <div>
                <label htmlFor="confirm">Confirm Password: </label>
                <input type="password" name="confirm" id="confirm" {...register("confirm")}/>
                {errors.confirm && <div style={{color:"red", fontSize:"0.5rem"}}>{errors.confirm.message}</div>}
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}