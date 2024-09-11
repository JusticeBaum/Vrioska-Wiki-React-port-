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
                {society.html}
            <h3>Military</h3>
                {military.html}
            {/* <h3>Laws</h3> */}
            <h3>Religion</h3>
                {religion.html}
            <h2>History</h2>
                {history.html}
        </section>
    );
};

export default HistoryContent;