// Importing necessary components
import Header from "@/components/Header"; // Assuming that "@/components/Header" is a path alias
import Layout from "@/components/Layout"; // Assuming that "@/components/Layout" is a path alias
import React, { useEffect, useState } from "react";

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
    // Wrap content with Layout component
    <Layout>
      <Header title="Users" />
      <div className="bg-white border border-[#eeeeee] p-5 mt-5 rounded-md">
        <h3 className="text-lg font-semibold mb-5">Users Data</h3>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-all-search" className="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>

                <th scope="col" className="px-6 py-3">
                  Actions
                </th>

              </tr>
            </thead>
            <tbody>
              {users?.map((data) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data?.id}
                  </th>
                  <td className="px-6 py-4">
                    {data?.name}
                  </td>
                  <td className="px-6 py-4">
                    {data?.email}
                  </td>
                  <td className="flex items-center px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
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
