export interface TEmployeeWithoutId {
    name: string,
    age: number,
    salary: number,
    profile_image?: string,
}

export interface TEmployee extends TEmployeeWithoutId {
    id: string,
}