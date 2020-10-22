import React from 'react';

class App extends React.Component{
    constructor(props) {
        super(props);
        console.log("constructor!");
    }

    state = {
        count : 0,
    }
    add = () => {
        //console.log('Add');
        //this.setState({ count : this.state.count +1 });
        this.setState(current => ({ 
            count: current.count + 1 
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
