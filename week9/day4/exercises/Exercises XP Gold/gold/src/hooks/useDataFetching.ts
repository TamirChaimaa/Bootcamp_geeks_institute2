import { useState, useEffect, useRef } from 'react';

type CacheEntry<T> = {
    data: T;
    timestamp: number;
};

type State<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
};

const cache: Record<string, CacheEntry<any>> = {};

function useDataFetching<T>(url: string, maxAge: number) {
    const [state, setState] = useState<State<T>>({
        data: null,
        loading: true,
        error: null,
    });

    const refreshTrigger = useRef(0);

    const invalidateCache = () => {
        delete cache[url];
        refreshTrigger.current++;
    };

    const refetch = () => {
        refreshTrigger.current++;
    };

    useEffect(() => {
        const fetchData = async () => {
            setState({ data: null, loading: true, error: null });

            const cached = cache[url];
            const isFresh = cached && Date.now() - cached.timestamp < maxAge;

            if (cached && isFresh) {
                setState({ data: cached.data, loading: false, error: null });
                return;
            }

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                cache[url] = { data: result, timestamp: Date.now() };
                setState({ data: result, loading: false, error: null });
            } catch (err: any) {
                setState({ data: null, loading: false, error: err.message });
            }
        };

        fetchData();
    }, [url, maxAge, refreshTrigger.current]);

    return { ...state, invalidateCache, refetch };
}

export default useDataFetching;
