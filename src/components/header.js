import React from 'react';

const Header = function (props) {
    return (
        <header className="header">
            <div>
                <h1>React Notepad</h1>
                <button onClick={
                    () => props.clearAll()
                }>Clear All Notes</button>
            </div>
        </header>
    );
}

export default Header;
