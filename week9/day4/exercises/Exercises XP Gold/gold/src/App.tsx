import React from 'react';
import RegisterForm from './components/RegisterForm';
import type { TableColumn } from './types';
import DataTable from './components/DataTable';
import UserList from './components/UserList';

type User = {
  id: number;
  name: string;
  email: string;
};

const data: User[] = [
  { id: 1, name: 'Dazai', email: 'dazai@example.com' },
  { id: 2, name: 'Anya', email: 'anya@example.com' }
];

const columns: TableColumn<User>[] = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email' }
];

const App = () => {
  const handleSort = (key: keyof User, dir: 'asc' | 'desc') => {
    console.log(`Sorted ${key} ${dir}`);
  };

  const handleSelect = (ids: number[]) => {
    console.log('Selected IDs:', ids);
  };
  return (
    <div>
      <h1>🌟 Exercise 1: Building a Form Management Custom Hook</h1>
      <RegisterForm /> <br /><hr />

      <h1>🌟 Exercise 2: Building a Data Table Component with Advanced TypeScript</h1>
      <DataTable data={data} columns={columns} onSort={handleSort} onSelect={handleSelect} /><br /><hr />

      <h1>🌟 Exercise 3: Creating a Data Fetching and Caching System</h1>
      <UserList />
    </div>
  );
};

export default App;