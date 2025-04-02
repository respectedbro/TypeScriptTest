interface IUserAge {
    age: number
}

interface IUser extends IUserAge{
    name: string
    email: string
}


type TypePerson = {
    age: number
}

type TypeUser = {
    name: string
    email: string
} & TypePerson

const user: TypeUser = {
    email: 'asdf@as.rt',
    name: 'Max',
    age: 21
}

