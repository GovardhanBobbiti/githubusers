import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users : []
        }
    }


    componentDidMount() {
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(result => {
                this.setState({ users : result})
            })
    }


    render(){
        return(
            <div>
                {this.state.users.map(user => {
                   return  (<div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '20px' }}>
                                    <img src={user.avatar_url} width={100} />
                                    <div style={{ padding : '20px'}}>{user.login}</div>
                                </div>
                   )
                })}
            </div>
        )
    }
}

export default App;
