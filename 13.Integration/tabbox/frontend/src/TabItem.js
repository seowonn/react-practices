import React from 'react';
import {Tab_Item} from './assets/scss/TabItem.scss';

function TabItem({no, name, select, selectTab}) {
    return (
        <li 
            className={[Tab_Item, select ? 'active' : ''].join(' ')}
            onClick={() => {
                selectTab(no);
            }}>
            {name}
        </li>
    );
}

export default TabItem;