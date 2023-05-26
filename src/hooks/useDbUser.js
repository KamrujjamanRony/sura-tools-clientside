import { useQuery } from 'react-query';

const useDbUser = (email) => {
    const { data: dbUser, isLoading, refetch } = useQuery('dbUser', () => fetch(`https://sura-tools-serverside-kamrujjamanrony.vercel.app/users?email=${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    return [dbUser, isLoading, refetch];
};

export default useDbUser;