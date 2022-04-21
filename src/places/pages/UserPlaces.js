import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id:'p1',
        title: 'Kolbäcksgränd 3',
        description: 'One of the most beautiful houses',
        imageUrl: 'https://www.brffriheten.se/wp-content/uploads/Kolbacksgrand-flygbild.jpg',
        address: 'Kolbäcksgränd, 128 46 Bagarmossen, Sverige',
        location: {
            lat: 59.277486,
            lng: 18.139336
        },
        creator: 'u1'
    },
    {
        id:'p2',
        title: 'Kolbäcksgränd 3',
        description: 'One of the most beautiful houses',
        imageUrl: 'https://www.brffriheten.se/wp-content/uploads/Kolbacksgrand-flygbild.jpg',
        address: 'Kolbäcksgränd, 128 46 Bagarmossen, Sverige',
        location: {
            lat: 59.277486,
            lng: 18.139336
        },
        creator: 'u2'
    }
];

const UserPlaces =() => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    
    return <PlaceList items={loadedPlaces}/>;
};

export default UserPlaces;