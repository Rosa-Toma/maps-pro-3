import { useState } from "react";

const useDisplayPage = () => {
    const [isHomePageActive, setIsHomePageActive] = useState(true);
    const [isSearchPageActive, setIsSearchPageActive] = useState(false);
    const [isInformationPageActive, setIsInformationPageActive] = useState(false);
    const [isAccountPageActive, setIsAccountPageActive] = useState(false);

    const displayHomePage = () => {
        setIsHomePageActive(true);
        setIsSearchPageActive(false);
        setIsInformationPageActive(false);
        setIsAccountPageActive(false);
    };

    const displaySearchPage = () => {
        setIsHomePageActive(false);
        setIsSearchPageActive(true);
        setIsInformationPageActive(false);
        setIsAccountPageActive(false);
    };

    const displayInformationPage = () => {
        setIsHomePageActive(false);
        setIsSearchPageActive(false);
        setIsInformationPageActive(true);
        setIsAccountPageActive(false);
    };

    const displayAccountPage = () => {
        setIsHomePageActive(false);
        setIsSearchPageActive(false);
        setIsInformationPageActive(false);
        setIsAccountPageActive(true);
    };

    return [isHomePageActive, displayHomePage, isSearchPageActive, displaySearchPage, isInformationPageActive, displayInformationPage, isAccountPageActive, displayAccountPage];
};

export default useDisplayPage;
