const useGuide = () => {
    const tangentGuide = () => {
        console.log("tangentGuide");
    };

    const normalGuide = () => {
        console.log("normalGuide");
    };

    return [tangentGuide, normalGuide];
};

export default useGuide;
