const useStandard = () => {
    const pointSelection = () => {};

    const circleSelection = () => {};

    const polygonSelection = () => {};

    const freeSelection = () => {};

    const undo = () => {
        console.log("undo");
    };

    const redo = () => {
        console.log("redo");
    };

    return [pointSelection, circleSelection, polygonSelection, freeSelection, undo, redo];
};

export default useStandard;
