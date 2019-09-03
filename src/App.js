import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
// Icons slow down the build unless you change the process.
// https://material-ui.com/guides/minimizing-bundle-size/#option-2
// For now, the import below is only for testing if it's slower.
// import { Add, DeleteForever, FourK } from '@material-ui/icons';
import "./App.css";
import { UserList, UserEdit, UserCreate } from "./users.js";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    </Admin>
  );
}

export default App;
