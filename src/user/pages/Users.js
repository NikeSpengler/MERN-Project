import React from "react";
import UsersList from '../components/UsersList';


const Users = () => {
    const USERS = [
        {
            id: 'ul', 
            name: 'Nike Spengler', 
            image: 'https://besthqwallpapers.com/sv/djur/s%C3%B6ta-djur-gris-g%C3%A5rd-lilla-grisen-grisar-4004', 
            places: 3 
        }
    ];

    return  <UsersList items={USERS} />;
};

export default Users;