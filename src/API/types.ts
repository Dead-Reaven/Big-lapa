interface ContactTypes {
  email: string
  first_phoneNumber: string
  second_phoneNumber: string
}

interface DogTypes {
  data: {
    id: number
    src: string
    name: string
    sex: string
    age: string
    haschip: boolean
    hasbreed: boolean
    breed: string
    size: string
  }[]
}

export type { ContactTypes, DogTypes }
