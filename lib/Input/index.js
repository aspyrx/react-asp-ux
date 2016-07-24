import React from 'react';

import classNames from 'classnames';

import aspUx from '../index.less';
import styles from './Input.less';

export default function Input(props) {
    const { inline, children, design, className, type, ...rest } = props;
    const designClass = aspUx[design];
    const labelClasses = classNames(className, styles.label, styles[type],
        designClass, { [styles.inline]: inline });

    return <label className={labelClasses}>
        <input className={designClass} type={type} {...rest} />
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

