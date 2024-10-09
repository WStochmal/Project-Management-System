export interface AuthProps {
  email: string;
  password: string;
}

export interface AuthResponseProps {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}
