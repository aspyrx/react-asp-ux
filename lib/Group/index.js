import React from 'react';

export default function Group(props) {
    const { groupClassName, children, ...rest } = props;

    return <div className={groupClassName}>
        {React.Children.map(children, child => React.cloneElement(child, rest))}
    </div>
}

Group.propTypes = {
    groupClassName: React.PropTypes.string,
    children: React.PropTypes.node
}

