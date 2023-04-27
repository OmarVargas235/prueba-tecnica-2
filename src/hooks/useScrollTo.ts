import { useState, useEffect, useLayoutEffect, useRef, MutableRefObject } from 'react';
import { useDispatch } from 'react-redux';

import { setIsActiveLoading } from '../redux/reducers/reducerBlockUI';

interface Props {
    sectionRef: MutableRefObject<HTMLDivElement | null>;
    n: number;
}

export const useScrollTo = (): Props => {

    const disptach = useDispatch();

    const sectionRef = useRef<HTMLDivElement | null>(null);

    const [n, setN] = useState<number>(0);
    const [update, setUpdate] = useState<boolean>(false);

    useEffect(() => {

        disptach(setIsActiveLoading(true));

        const timeout = window.setTimeout(() => {

            if (sectionRef.current === null) return undefined;

            const top = sectionRef.current.offsetTop;
            setN(top);

            disptach(setIsActiveLoading(false));

        }, 6000);

        return () => window.clearTimeout(timeout);

    }, [sectionRef, update]);

    useLayoutEffect(() => {

        const handleResize = (): void => setUpdate(state => !state);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return {
        sectionRef,
        n,
    };
}