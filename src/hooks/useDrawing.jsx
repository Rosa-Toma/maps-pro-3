const useDrawing = () => {
    const circleDrawing = () => {
        console.log("circleDrawing");
    };

    const polylineDrawing = () => {
        console.log("polylineDrawing");
    };

    const polygonDrawing = () => {
        console.log("polygonDrawing");
    };

    return [circleDrawing, polylineDrawing, polygonDrawing];
};

export default useDrawing;
