import { useQuery } from 'react-query';

const useDbUser = (email) => {
    const { data: dbUser, isLoading, refetch } = useQuery('dbUser', () => fetch(`https://sura-tools-serverside-production.up.railway.app/users?email=${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    return [dbUser, isLoading, refetch];
};

export default useDbUser;