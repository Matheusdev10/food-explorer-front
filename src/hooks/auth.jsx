import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;
      localStorage.setItem('@frontendexplorer:user', JSON.stringify(user));
      localStorage.setItem('@frontendexplorer:token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível entrar');
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@frontendexplorer:token');
    localStorage.removeItem('@frontendexplorer:user');
    setData({});
  }

  async function updateProfile({ product, avatarFile }) {
    try {
      if (imgFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('img', imgFile);
        const response = await api.patch('/products/img', fileUploadForm);
        product.img = response.data.img;
      }
      await api.put('/users', user);
      localStorage.setItem('@frontendexplorer:user', JSON.stringify(user));
      setData({ user, token: data.token });
      alert('Perfil atualizado');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível atualizar o perfil');
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@frontendexplorer:token');
    const user = localStorage.getItem('@frontendexplorer:user');
    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
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
