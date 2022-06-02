import axios from "axios";
import { useEffect, useState } from "react";
import ToggleCard from "../components/ToggleCard";

const Users = () => {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);

  // on mount load the users
  useEffect(() => {
    getUsers();
  }, []);

  // render users
  const renderUsers = () => {
    if (loading) {
      return <p>spinner here please wait</p>;
    }
    return users.map((u) => {
      return (
        <div key={u.id}>
          <h1>{u.email}</h1>
          <h1>id: {u.id}</h1>
        </div>
      );
    });
  };

  // does the database call to get users
  const getUsers = async () => {
    setLoading(true)
    // use axios to grab data from an actual server
    let res = await axios.get("https://reqres.in/api/users?delay=3");
    setLoading(false)
    console.log(res);
    console.log(res.data.data);
    setUsers(res.data.data);
  };
  return (
    <ToggleCard title="users">
      <h1>Users here</h1>
      {renderUsers()}
    </ToggleCard>
  );
};

export default Users;
