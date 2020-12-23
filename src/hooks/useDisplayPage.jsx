import { useState } from "react";

const useDisplayPage = () => {
    const [activeHome, setActiveHome] = useState(true);
    const [activeSearch, setActiveSearch] = useState(false);
    const [activeInformation, setActiveInformation] = useState(false);
    const [activeAcount, setActiveAcount] = useState(false);

    const displayHome = () => {
        setActiveHome(true);
        setActiveSearch(false);
        setActiveInformation(false);
        setActiveAcount(false);
    };

    const displaySearch = () => {
        setActiveHome(false);
        setActiveSearch(true);
        setActiveInformation(false);
        setActiveAcount(false);
    };

    const displayInformation = () => {
        setActiveHome(false);
        setActiveSearch(false);
        setActiveInformation(true);
        setActiveAcount(false);
    };

    const displayAcount = () => {
        setActiveHome(false);
        setActiveSearch(false);
        setActiveInformation(false);
        setActiveAcount(true);
    };

    return [activeHome, displayHome, activeSearch, displaySearch, activeInformation, displayInformation, activeAcount, displayAcount];
};

export default useDisplayPage;
