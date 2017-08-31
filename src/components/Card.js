import React from 'react';

class Card extends React.Component {

    render(){

        const ingredients = this.props.details.ingredients
            .split(',')
            .map((item, key) => <li key={key}>{item}</li>);

        const instructions = this.props.details.instructions
            .split('\n')
            .map((item, key) => <li key={key}>{item}</li>);

        return(
          <div className="card">
            <div className="image">
                <img src={this.props.details.image} alt={this.props.details.nom} />
            </div>
            <div className="recette">
                  <h2>{this.props.details.nom}</h2>     
                  <ul className="liste-ingredients">
                    {ingredients}
                  </ul>
                  <ol className="liste-instructions">
                    {instructions}
                  </ol>
            </div>
          </div>
        )
    }

    static propTypes = {
        details: React.PropTypes.object.isRequired
    }

}

export default Card;