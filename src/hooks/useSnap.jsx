const useSnap = () => {
    const inactiveSnap = () => {
        console.log("inactive");
    };

    const pointSnap = () => {
        console.log("point");
    };

    const segmentSnap = () => {
        console.log("segment");
    };

    const polylineSnap = () => {
        console.log("polyline");
    };

    return [inactiveSnap, pointSnap, segmentSnap, polylineSnap];
};

export default useSnap;
