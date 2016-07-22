import React from 'react';

import classNames from 'classnames';

import styles from './Input.less';

export default function Input(props) {
    const { inline, children, design, className, type, ...rest } = props;
    const designClass = `asp-ux-${design}`;
    const labelClasses = classNames(className, styles.label, styles[type],
        designClass, { [styles.inline]: inline });

    return <label className={labelClasses}>
        <input type={type} {...rest} />
        <span>{children}</span>
    </label>
}

Input.propTypes = {
    inline: React.PropTypes.bool,
    children: React.PropTypes.node,
    design: React.PropTypes.string,
    className: React.PropTypes.string,
    type: React.PropTypes.string
}

Input.defaultProps = {
    type: "text",
    design: "default"
}

function Group(props) {
    const { name, children, ...rest } = props;

    return <span {...rest}>
        {React.Children.map(children, child => React.cloneElement(child, { name }))}
    </span>
}

Group.propTypes = {
    children: React.PropTypes.node,
    name: React.PropTypes.string
}

Input.Group = Group;

