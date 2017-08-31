import React from 'react';
import AjouterRecette from './AjouterRecette';

class Admin extends React.Component {

    traiterChangement = (event, key) => {
        const recette = this.props.recettes[key];
        const majRecette = {
            ...recette,
            [event.target.name]:event.target.value
        };
        this.props.majRecette(key, majRecette);
    };


    renderAdmin = key => {
        const recette = this.props.recettes[key];
        return(
            <div className="card" key={key}>
                <form className="admin-form">
                    <input name="nom" type="text" 
                        placeholder="Nom de la recette" 
                        onChange={e => this.traiterChangement(e, key)} value={recette.nom}/>

                    <input name="image" type="text" 
                        placeholder="Adresse de l'image" 
                        onChange={e => this.traiterChangement(e, key)} value={recette.image} />

                    <textarea name="ingredients" rows="3"
                        placeholder="Liste des ingrédients" 
                        onChange={e => this.traiterChangement(e, key)} value={recette.ingredients}></textarea>

                    <textarea name="instructions" rows="15"
                        placeholder="Liste des instructions" 
                        onChange={e => this.traiterChangement(e, key)} value={recette.instructions}></textarea>
                </form>
                <button onClick={() => this.props.supprimerRecette(key)}>Supprimer</button>
            </div>
        )
    };


    render(){

        const adminCards = Object.keys(this.props.recettes).map(this.renderAdmin);

        return(
            <div className="cards">
                <AjouterRecette ajouterRecette={this.props.ajouterRecette}/>
                {adminCards}
                <footer>
                    <button onClick={this.props.chargerExemple}>Remplir</button>
                </footer>
            </div>
        )
    }

    static propTypes = {
        chargerExemple : React.PropTypes.func.isRequired,
        ajouterRecette : React.PropTypes.func.isRequired,
        recettes : React.PropTypes.object.isRequired,
        majRecette : React.PropTypes.func.isRequired,
        supprimerRecette : React.PropTypes.func.isRequired
    }
}

export default Admin;