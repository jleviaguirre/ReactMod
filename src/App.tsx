import React, { useState, useEffect } from "react";

interface AppProps {
    mod: Spotfire.Mod; // Define the type of 'mod' appropriately
    dataView: Spotfire.DataView;
    windowSize: Spotfire.Size;
}

const App: React.FC<AppProps> = ({ mod, dataView, windowSize }) => {
    const [rows, setRows] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            // Get all rows from the data view
            const fetchedRows = await dataView.allRows();
            setRows(fetchedRows || []);
        };
        
        fetchData();
    }, [dataView]);
    
    return (
        <div style={{ width: windowSize.width, height: windowSize.height }}>
            <h2>My React Visualization</h2>
            <div>
                {rows.length > 0 ? (
                    <p>Found {rows.length} rows in the data view.</p>
                ) : (
                    <p>No data available.</p>
                )}
                {/* Add your visualization code here */}
            </div>
        </div>
    );
};

export default App;