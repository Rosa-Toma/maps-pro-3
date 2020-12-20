import { icons } from "assets/icons/icons";

const useGuide = (setIconFunction) => {
    const tangentGuide = () => {
        console.log("tangentGuide");
    };

    const normalGuide = () => {
        console.log("normalGuide");
    };

    return [tangentGuide, normalGuide];
};

export default useGuide;
