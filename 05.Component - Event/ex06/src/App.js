import React, {Component} from 'react';
import './assets/scss/App.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                ref={(ref) => {this.outerRef = ref}}
                className={'App'}
                onScroll = {(e) => {
                    console.log(outerRef.current.scrollTop, outerRef.current.clientHeight, innerRef.current.clientHeight);
                }}>
                <div
                    ref={(ref) => this.innerRef = ref}>
                    <ul>
                        {
                            Array.from({length: 100}, (_, i) => i + 1).map((e) => <li key={e}>{`아이템 ${i}`}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}