export interface LoginForm {
  email: string;
  password: string;
}

export interface IGetLoginResponse {
    access_token: string
}

export interface IGetUserInfo{
    role: string,
    name: string,
    surname: string
}

export interface CaseForm{
    title: string,
    nrc: number,
    description: string
}

export interface Case {
    id:number;
    createdAt: Date;
    title: string;
    nrc: number;
    description: string;
    files: string;
    status: string;
    campus: string;
    userId: number;
}

export interface Campus{
    id: number,
    name: string
}

export enum AllowedStatus {
    'APPROVED',
    'REJECTED'
}

export interface Status {
    id:number;
    name: string;
    enum: AllowedStatus
}