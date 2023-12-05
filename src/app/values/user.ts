import { User } from "../models/user";

export const usersValue: User[] = [
    {
        _id: '1',
        name: 'Jackelyn',
        last_name: '',
        years_old: 30,
        password: 'admin',
        email: 'admin@gmail.com',
        rol: 'admin',
        avatar: '',
        telephone_number: '999999999',

        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        _id: '2',
        name: 'Pancho Pèrez',
        last_name: '',
        years_old: 22,
        password: 'pancho',
        email: 'pancho@gmail.com',
        rol: 'user',
        avatar: '',
        telephone_number: '999999999',

        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        _id: '3',
        name: 'Anderson',
        last_name: '',
        years_old: 20,
        password: 'anderson123',
        email: 'anderson@gmail.com',
        rol: 'user',
        avatar: '',
        telephone_number: '999999999',

        created_at: new Date(),
        updated_at: new Date(),
    },
]