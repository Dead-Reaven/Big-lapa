interface RequestStatusTypes {
  pending: boolean
  resolve: boolean
  reject: boolean
  massage: string
}

interface ContactTypes {
  email: string
  first_phoneNumber: string
  second_phoneNumber: string
}

interface PartnerTypes {
  id: string
  src: string | File
  encodedBase64?: string
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

interface loginTypes {
  login: string
  password: string
  setWorning?: any
}

interface changePassTypes {
  oldPassword: string
  newPassword: string
  setWorning?: any
}

export type {
  ContactTypes,
  DogTypes,
  PartnerTypes,
  RequestStatusTypes,
  changePassTypes,
  loginTypes,
}
