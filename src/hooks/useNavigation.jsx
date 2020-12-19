const useNavigation = (map) => {
    const panoter = () => {
        console.log("panoter");
    };

    const zoomIn = () => {
        const view = map.getView();
        const zoom = view.getZoom();

        if (zoom < view.getMaxZoom()) {
            view.setZoom(zoom + 1);
        }
    };

    const zoomOut = () => {
        const view = map.getView();
        const zoom = view.getZoom();

        if (zoom < view.getMaxZoom()) {
            view.setZoom(zoom - 1);
        }
    };

    const recenter = () => {
        console.log("recenter");
    };

    return [panoter, zoomIn, zoomOut, recenter];
};

export default useNavigation;
