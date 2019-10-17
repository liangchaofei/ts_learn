import React from 'react';
import { Button } from 'antd';

interface IProps{
    name: string;
}

class HelloClass extends React.Component<IProps>{
    state = {
        count: 0,
    }
    add = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    render(){
        const { count } = this.state;
        return (
            <>
                <p>你点击了{count}次</p>
                <Button onClick={this.add}>点击</Button>
                <p>hello {this.props.name}</p>
            </>
        )
    }
}
export default HelloClass;