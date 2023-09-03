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

interface DogType {
  _id?: string
  mainPhoto: string
  photos: string[]
  name: string
  sex: string
  age: string
  haschip: boolean
  hasbreed: boolean
  breed?: string
  size: string
  description?: string
}

interface IEmailUser {
  login: string
  password: string
}

interface IUserContacts {
  name: string
  email: string
  question: string
}

interface IAdminChangePass {
  currentPassword: string
  newPassword: string
}

interface IChangePass {
  token: string | null
  newPassword: string
}

interface IForgotPass {
  email: string
}

interface IValidation {
  value: string
  validations: boolean | any
}

export type {
  ContactTypes,
  DogType,
  IAdminChangePass,
  IChangePass,
  IEmailUser,
  IForgotPass,
  IUserContacts,
  IValidation,
  PartnerTypes,
  ReportTypes,
  RequestStatusTypes,
}
