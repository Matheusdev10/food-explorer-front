import { AxiosError } from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { ISessionsResponse, sessions } from '../store/apis/auth';
import { api } from '../store/apis/index';

type UserCredentials = {
  email: string;
  password: string;
};

interface IAuthContextData {
  signIn: (credentials: UserCredentials) => Promise<void>;
  signOut: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: ISessionsResponse['user'] | undefined;
}

export const AuthContext = createContext({} as IAuthContextData);
function AuthProvider({ children }: any) {
  const [data, setData] = useState<ISessionsResponse | null>();
  const [loading, setLoading] = useState(false);

  async function signIn({ email, password }: UserCredentials) {
    try {
      setLoading(true);
      const response = await sessions({ email, password });
      const { user, token } = response;
      localStorage.setItem('@frontendexplorer:user', JSON.stringify(user));
      localStorage.setItem('@frontendexplorer:token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });
      setLoading(false);
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      if (error.response) {
        alert(error.response.data.message);
        setLoading(false);
      } else {
        alert('Não foi possível entrar');
        setLoading(false);
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@frontendexplorer:token');
    localStorage.removeItem('@frontendexplorer:user');
    setData(undefined);
  }

  useEffect(() => {
    const token = localStorage.getItem('@frontendexplorer:token');
    const user = localStorage.getItem('@frontendexplorer:user');
    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, loading, setLoading, user: data?.user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
