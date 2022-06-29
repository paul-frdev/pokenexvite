import { useState } from 'react';
import { useRequestPakemonQuery } from '../hooks/useRequest';

export const PakemonsPage = () => {
    const [offset, setOffset] = useState(0)
    const { data, isLoading } = useRequestPakemonQuery({ offset })

    if (isLoading) return <div>loading...</div>
    console.log(data?.data.results);

    return (
        <div>
            {'ss'}
            <button onClick={() => setOffset(offset + 10)}>add + 10</button>
        </div>
    )
}