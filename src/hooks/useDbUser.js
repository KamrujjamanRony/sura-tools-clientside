import { useQuery } from 'react-query';

const useDbUser = (email) => {
    const { data: dbUser, isLoading, refetch } = useQuery('dbUser', () => fetch(`http://localhost:5000/users?email=${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    return [dbUser, isLoading, refetch];
};

export default useDbUser;