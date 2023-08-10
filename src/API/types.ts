interface RequestStatusTypes {
  pending: boolean
  resolve: boolean
  reject: boolean
  massage: string
}

interface ReportTypes {
  id: string
  src: File | null
  name: string
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
    mainPhoto: string
    photos: DogPhotoType[]
    name: string
    sex: string
    age: string
    haschip: boolean
    hasbreed: boolean
    breed: string
    size: string
  }[]
}

interface SingleDogType {
  id?: number
  mainPhoto: string
  photos: DogPhotoType[]
  name: string
  sex: string
  age: string
  haschip: boolean
  hasbreed: boolean
  breed?: string
  size: string
  description?: string
}

interface DogPhotoType {
  src: string | File
  encodedBase64?: string
}

interface LoginType {
  login: string
  password: string
  setIsError: (value: string) => void
}

interface changePassType {
  oldPassword: string
  newPassword: string
  setIsError: (value: string) => void
}

interface ValidationsType {
  value: string
  validations: boolean | any
}

export type {
  ContactTypes,
  DogTypes,
  SingleDogType,
  DogPhotoType,
  LoginType,
  PartnerTypes,
  ReportTypes,
  RequestStatusTypes,
  ValidationsType,
  changePassType,
}
