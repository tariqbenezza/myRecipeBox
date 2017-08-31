import React from 'react';

class Header extends React.Component {

    convertirPseudo = (pseudo) => {
        return /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
    };


    render(){
        return(
            <header>
                <h1>La boîte à recettes {this.convertirPseudo(this.props.pseudo)}</h1>
            </header>
        )
    }

    static propTypes = {
        pseudo : React.PropTypes.string.isRequired
    }
}

export default Header;