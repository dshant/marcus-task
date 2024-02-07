import Header from "@/components/Header";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import styles from "../teams/index.module.css";

const Users = () => {
  // State to store users data
  const [users, setUsers] = useState([]);

  // Function to fetch users data from JSON file
  const fetchUsers = async () => {
    try {
      // Fetch data from users.json file
      const res = await fetch("/json/users.json");
      const jsonData = await res.json();
      // Update users state with fetched data
      setUsers(jsonData);
    } catch (error) {
      // Log error if fetching data fails
      console.error("Error fetching data:", error);
    }
  };

  // Fetch users data when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      <Header title="Users" />
      <div className={styles.main}>
        <h3 className={styles.heading}>Users Data</h3>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className={styles.input}
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className={styles.head}>
                  Id
                </th>
                <th scope="col" className={styles.head}>
                  Name
                </th>
                <th scope="col" className={styles.head}>
                  Email
                </th>
                <th scope="col" className={styles.head}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((data) => (
                <tr className={styles.tableRow}>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className={styles.input}
                      />
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data?.id}
                  </th>
                  <td className="px-6 py-4">{data?.name}</td>
                  <td className="px-6 py-4">{data?.email}</td>
                  <td className="flex items-center px-6 py-4">
                    <a href="#" className={styles.edit}>
                      Edit
                    </a>
                    <a href="#" className={styles.remove}>
                      Remove
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
