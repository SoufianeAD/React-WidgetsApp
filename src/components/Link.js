import React from 'react';

const Link = ({className, href, children}) => {
    const onClick = (event) => {

        if(event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);// tells the components that url just changes
    }

    return (
        <a onClick={onClick} href={href} className={className}>
            {children}
        </a>
    );
}

export default Link;