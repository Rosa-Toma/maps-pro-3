
const useMeasure = () => {
    const distanceMeasurement = () => {
        console.log("distance measurement");
    };

    const surfaceMeasurement = () => {
        console.log("surface measurement");
    };

    const bufferMeasurement = () => {
        console.log("buffer measurement");
    };

    const translater = () => {
        console.log("translater");
    };

    const edit = () => {
        console.log("edit");
    };

    return [distanceMeasurement, surfaceMeasurement, bufferMeasurement, translater, edit];
};

export default useMeasure;
