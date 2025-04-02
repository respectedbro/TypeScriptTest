interface ICar {
    id: number
    name: string
    price: number
    yearBuild: number
}

// interface ICarCreate extends Omit<ICar, 'id'>{
//
// }
// interface ICarId extends Pick<ICar, 'id'>{
// }
// interface IOptionalCar extends Partial <ICar>{
// }
//
// interface IReadonlyCar extends Readonly <ICar>{
// }
//
// type TypeCarRecord = Record<'name' | 'price', string | number>

// interface IRequiredCar extends Required <ICar>{
// }

// type TypeGetName = () => string
// type Return = ReturnType<TypeGetName>
//


// type Any = Extract<'max' | 'andrey', 'andrey' | 'misha'>
//
//
// const car: IRequiredCar = {
//
// }