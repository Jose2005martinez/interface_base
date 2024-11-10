import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import Card from './Card';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [])

  if (loading) return <Loader />;

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {users.map(user => (
        <Card key={user.id} title={user.name} content={user.email} />
      ))}
    </div>
  );
};

export default UserList;
