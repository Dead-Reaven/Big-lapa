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
  LoginType,
  PartnerTypes,
  ReportTypes,
  RequestStatusTypes,
  ValidationsType,
  changePassType,
}
