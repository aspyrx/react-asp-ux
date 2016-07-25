import React from 'react';
import classNames from 'classnames';
import designs, { designShape } from '../designs';

import styles from './Select.less';

export default function Select(props) {
    const { children, className, design, inline, ...rest } = props;
    const classes = classNames(className, styles.select, designs(design), {
        [styles.inline]: inline
    });
    return <select className={classes} {...rest}>
        {children}
    </select>;
}

Select.propTypes = {
    design: designShape,
    inline: React.PropTypes.bool,
    className: React.PropTypes.string,
    children: React.PropTypes.node
};

