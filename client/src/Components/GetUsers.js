import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_USERS } from '../GraphQL/Queries'

const GetUsers = () => {
  const { data } = useQuery(LOAD_USERS)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if(data) {
      setUsers(data.getAllUsers)
    }
  }, [data]);

  return (
    <div>{users ? users.map((val) => (
      <h1>{val.firstName}</h1>
    )) : ''}</div>
  )
}

export default GetUsers