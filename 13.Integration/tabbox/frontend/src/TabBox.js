import React, { useState } from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import {Tab_Box} from './assets/scss/TabBox.scss';
import data from './assets/json/data';

function TabBox(props) {
    // 재렌더링을 위해 상태 저장소 필요
    const [activeIndex, setActiveIndex] = useState(0);

    const selectTab = (no) => {
        setActiveIndex(data.findIndex((e) => e.no === no));
    }

    // JSX를 사용하면 내부적으로 React.createElement()가 호출된다.
    return (
        <div className={Tab_Box}>
            <Tabs 
                selectTab={selectTab}
                // tabs에는 data 배열의 모든 요소가 포함되어 전달되고,
                // activeIndex에 활성화 여부를 담아서 보낸다. 
                tabs={data.map((e, i) => {
                    const {contents, ...rest} = e;
                    rest.active = (i === activeIndex);
                    return rest;
                })} />
            <TabView contents={data[activeIndex].contents} />
        </div>
    );
}

export default TabBox;