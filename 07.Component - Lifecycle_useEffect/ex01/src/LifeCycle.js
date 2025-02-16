import React, {Component} from 'react';

export default class LifeCircle extends Component {
    constructor(props) {
        super(props);
        
        this.h3Ref = null;
        this.state = {
            color: null
        }

        console.log('[MOUNT 1][UPDATE X][UNMOUNT X]: constructor()');
    }

    /**
     *  props로 받아온 값을 state에 동기화 한다.[react v16.3], 사용자가 직접 정의해야 실행됨
     *  return문을 통해 state 여부를 결정. 즉, null을 반환한다는 의미는 state를 변경하지 않는다는 의미
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(`[MOUNT 2][UPDATE 1][UNMOUNT X]: getDerivedStateFromProps(nextProps=${nextProps.color}, prevState=${prevState.color})`);
        return nextProps.color !== prevState.color ? {color: nextProps.color} : null;
    }

    /**
     *  React 내장 LifeCycle 메서드로, 불필요한 렌더링을 방지하여 React 성능을 최적화할 수 있다. 
     *  props state을 변경 했을 때, re-rendering 여부(반환값 true: 한다. false: 안한다)를 결정한다.
     *  현재 데이터: this.props, this.state
     *  변경 데이터: nextProps, nextState
     *  로 접근 가능하다.
     *
     *  컴포넌트 성능 최적화(튜닝)에 사용할 수 있다.
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`[MOUNT X][UPDATE 2][UNMOUNT X]: shouldComponentUpdate(nextProps=${nextProps.color}, nextState=${nextState.color})`)
        return true;
    }

    // render()는 클래스형 컴포넌트에서 '반드시!! 정의해야 하는 필수 메서드이다. 컴포넌트가 UI를 반환하는 역할
    /**
     *  ref={ref => this.h3Ref = ref} 의미
     *  -> h3 태그의 DOM 요소 자체를 반환하고 이를 this.h3Ref에 할당하는 것
     */
    render() {
        console.log('[MOUNT 3][UPDATE 3][UNMOUNT X]: render()');
        return <h3 style={{backgroundColor: this.state.color, width: 100, height: 50}} ref={ref => this.h3Ref = ref}/>
    }

    /**
     *  업데이트 과정에서 DOM이 변경되기 직전(render 실행 이후 == this.h3Ref 변경 적용 이후,
     *   하지만 DOM(h3 태그)은 변경되지 않은 상태)에 실행되는 메서드
     *  render 메소드 호출 후, DOM에 변화를 반영하기 직전에 호출 [react v16.3]
     *  반환 값은 다음 메소드 componentDidUpdate()의 세번째 파라미터(snapshot)로 전달.
     *  변경 전의 props, state 접근이 가능하다.
     *  주로 업데이트 직전의 값을 참고해야 할 일이 있을 때 오버라이딩 한다.
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`[MOUNT X][UPDATE 4][UNMOUNT X]: getSnapshotBeforeUpdate(prevProps=${prevProps.color}, prevState=${prevState.color})`);
        return prevProps.color !== this.state.color ? this.h3Ref.style.backgroundColor : null;
    }

    /**
     *  때문에 snapshot는 업데이트 전의 상태이다!
     *  DOM 업데이트가 끝난 직후 호출 DOM 작업이 가능하다.
     *  변경 전의 state 값과 props값에 접근 가능
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(`[MOUNT X][UPDATE 5][UNMOUNT X]: componentDidUpdate(prevProps=${prevProps.color}, prevState=${prevState.color}, snapshot=${snapshot})`);

        //   "10, 20, 30" -> [10, 20, 30] -> reduce( '#' -> '#0a' -> '#0af5' -> '#0xf5ee')
        const hexColor = snapshot.replace(/[^\d,]/g, '').split(',').map(e => parseInt(e)).reduce((s, e) => s + ('0' + e.toString(16)).slice(-2), "#");
        console.log(`[MOUNT X][UPDATE 5][UNMOUNT X]: componentDidUpdate(prevProps=${prevProps.color}, prevState=${prevState.color}, snapshot=${hexColor})`);
    }

    /**
     * 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후!
     * 다른 자바스크립트 라이브러리 또는 프레임워크 함수 호출 또는
     * 1. 이벤트 등록
     * 2. 타이머 설정
     * 3. 네트워크 통신
     * 등을 할 수 있다.
     */
    componentDidMount() {
        console.log('[MOUNT 4][UPDATE X][UNMOUNT X]: componentDidMount()');
    }

    /**
     *  컴포넌트를 DOM에서 제거 할 때
     *  componentDidMount 에서 등록한 이벤트, 타이머, 직접 생성한 DOM 엘리멘트등을 제거(Clean-Up)
     *  작업을 한다.
     */
    componentWillUnmount() {
        console.log('[MOUNT X][UPDATE X][UNMOUNT O]: componentWillUnmount()');
    }
}