import React from 'react';

class App extends React.Component{

    render(){
        return(
            <div className="box">
                <h1>{this.props.params.pseudo}</h1>
                <div className="cards">
                    <div className="card"></div>
                </div>
            </div>
        )
    }

    static propTypes = {
        params: React.PropTypes.object.isRequired
    };

}

export default App;