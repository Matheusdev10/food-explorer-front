import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../store/apis/index';
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  async function signIn({ email, password }) {
    try {
      setLoading(true);
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;
      localStorage.setItem('@frontendexplorer:user', JSON.stringify(user));
      localStorage.setItem('@frontendexplorer:token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });
      setLoading(false);
    } catch (error) {
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
    setData({});
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
      value={{ signIn, signOut, loading, setLoading, user: data.user }}
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
