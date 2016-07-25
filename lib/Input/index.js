import React from 'react';
import classNames from 'classnames';
import designs, { designShape } from '../designs';

import styles from './Input.less';

export default function Input(props) {
    const { inline, children, design, className, type, ...rest } = props;
    const designClass = designs(design);
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
    design: designShape,
    className: React.PropTypes.string,
    type: React.PropTypes.oneOf([
        'text', 'checkbox', 'radio'
    ])
}

Input.defaultProps = {
    type: 'text'
}

