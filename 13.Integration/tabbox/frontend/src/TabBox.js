import React, { useState } from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import {Tab_Box} from './assets/scss/TabBox.scss';
import data from './assets/json/data';

function TabBox(props) {
    // 재렌더링을 위해 상태 저장소 필요
    const [activeIndex, setActiveIndex] = useState(0);

    const selectTab = (no) => {
        console.log(`${no} selected!`);
        const index = data.findIndex((e) => e.no === no);
        console.log(index);
    }

    // JSX를 사용하면 내부적으로 React.createElement()가 호출되므로
    // React가 사용된 것으로 볼 수 있다.
    return (
        <div className={Tab_Box}>
            <Tabs 
                selectTab={selectTab}
                tabs={data.map((e, i) => {
                    const {contents, ...rest} = e;

                    if(i == activeIndex) {
                        rest.active = true;
                    }
                    return rest;
                })} />
            <TabView contents={data[activeIndex].contents} />
        </div>
    );
}

export default TabBox;