import React from 'react';
import classNames from 'classnames';

import styles from './Button.less';

export default function Button(props) {
    const { className, children, design, ...rest } = props;
    const classes = classNames(className, styles.button, `asp-ux-${design}`);

    return <button className={classes} {...rest}>{children}</button>
}

Button.propTypes = {
    design: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node
}

Button.defaultProps = {
    design: "default"
}

