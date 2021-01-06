import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "App";
import { MapContextProvider } from "context/MapContext";

ReactDOM.render(
    <StrictMode>
        <MapContextProvider>
            <App />
        </MapContextProvider>
    </StrictMode>,
    document.getElementById("root")
);
