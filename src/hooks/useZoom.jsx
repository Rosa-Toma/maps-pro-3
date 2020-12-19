export const useZoom = (map) => {
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

    return [zoomIn, zoomOut];
};
