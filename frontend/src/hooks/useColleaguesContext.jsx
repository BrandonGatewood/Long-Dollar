import { ColleaguesContext } from "../context/ColleaguesContext";
import { useContext } from 'react';

export const useColleaguesContext = () => {
    const context = useContext(ColleaguesContext);

    if(!context) {
        throw Error('useColleaguesCOntext must be used inside an ColleaguesContextProvicer');
    }

    return context;
}