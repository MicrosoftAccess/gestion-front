export interface LoginForm {
  email: string;
  password: string;
}

export interface IGetLoginResponse {
    access_token: string
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