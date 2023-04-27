// 1.- librerias
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

// 2.- components
import MemoriesPage from "../components/MemoriesPage";

// 3.- redux
import { setVirtualOffice } from '../../../redux/reducers/reducerScrollTo';

// 4.- hooks
import { useScrollTo } from "../../../hooks/useScrollTo";

const Memories = (): JSX.Element => {

    const dispatch = useDispatch();

    const { n, sectionRef } = useScrollTo();

    useEffect(() => { dispatch(setVirtualOffice(n)) }, [n]);

    return <MemoriesPage
        sectionRef={sectionRef}
    />;
}

export default Memories;