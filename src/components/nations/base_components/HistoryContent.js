import React from 'react';

const HistoryContent = ( {
    geography,
    environ,
    society,
    military,
    laws,
    religion,
    history
} ) => {
    return (
        <section className="content">
            <h2>Geography</h2>
            {geography.html}
            <h2>Environment</h2>
            <h2>Society</h2>
            <h3>Military</h3>
            <h3>Laws</h3>
            <h3>Religion</h3>
            <h2>History</h2>
        </section>
    );
};

export default HistoryContent;