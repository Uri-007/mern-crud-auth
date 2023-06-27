import {z} from "zod"

export const registerSchema = z.object({
    username: z.string({
        required_error: 'El nombre de usuario es requerido'
    }),
    email: z.string({
        required_error: 'El email es requerido'
    }).email({
        message: 'El email es invalido'
    }),
    password: z.string({
        required_error: 'El password es requerido'
    }).min(6, {
        message: 'El password debe tener al menos seis caracteres'
    })
   
})

export const loginSchema = z.object({
    email: z.string({
        required_error: "El email  es requerido",
    }).email({
        message: "El email no es valido",
    }),
    password: z.string({
        required_error: "El password es requerido",
    }).min(6, {
        message: "La contraseña debe tener al menos seis caracteres"
    })
});