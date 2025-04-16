import { initializeReactApp } from "./main-react";

Spotfire.initialize(async (mod: Spotfire.Mod) => {
    /**
     * Create the read function.
     */
    const reader = mod.createReader(mod.visualization.data(), mod.windowSize(), mod.property("myProperty"));

    /**
     * Store the context.
     */
    const context = mod.getRenderContext();

    /**
     * Initiate the read loop
     */
    reader.subscribe(async (dataView, windowSize, prop) => {
        /**
         * Check the data view for errors
         */
        const errors = await dataView.getErrors();
        if (errors.length > 0) {
            mod.controls.errorOverlay.show(errors);
            return;
        }
        mod.controls.errorOverlay.hide();

        /**
         * Delegate rendering to the React app
         */
        initializeReactApp(mod, dataView, windowSize, prop, context);
    });
});