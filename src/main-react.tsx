import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export function initializeReactApp(
    mod: Spotfire.Mod,
    dataView: Spotfire.DataView,
    windowSize: Spotfire.Size,
    prop: Spotfire.ModProperty<string>,
    context: Spotfire.RenderContext
) {
    const container = document.querySelector("#mod-container");
    if (!container) {
        mod.controls.errorOverlay.show(
            "Failed to find the DOM node with id #mod-container which should contain the visualization."
        );
        return;
    }

    // Create a React root and render the App component
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <App mod={mod} dataView={dataView} windowSize={windowSize} />
        </React.StrictMode>
    );

    // Signal that the mod is ready for export
    context.signalRenderComplete();
}