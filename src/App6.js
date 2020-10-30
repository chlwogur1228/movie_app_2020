import React from 'react';

class App extends React.Component{
    constructor(props) {
        super(props);
        console.log("constructor!");
    }

    //constructor > render > componentDidMout 순으로 실행
    // mount 생명 주기 함수
    state = {
        count : 0,
    }
    add = () => {
        //console.log('Add');
        //this.setState({ count : this.state.count +1 });
        this.setState(current => ({  //current 에는 현재 state가 넘어옴
            count: current.count + 1 // 그 state의 count에 1을 더함
        }) );
    }
    minus = () => {
        //console.log('Minus');
         //this.setState({ count : this.state.count -1 });
         this.setState(current => ({ 
            count: current.count - 1 
        }) );
    }
    componentDidMount() {
        console.log("component did mount!");
    }
    componentDidUpdate() { // 페이지 업데이트 될떄
        console.log("component did update!");
    }
    componentWillUnmount() { // 컴포인트 죽을때
        console.log("component will Unmount!");
    }
    render() { 
        console.log("Render!");
        return (
            <div>
            <h1>The number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>&nbsp;
            <button onClick={this.minus}>Minus</button>
            </div>
            
            );

             
    }
}
export default App;
