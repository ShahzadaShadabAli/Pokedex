import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateCards = ({ pokemons }) => {
    return (
        <div className="container-fluid px-5 main-cont py-5">
            {pokemons.map((pokemon) => (
                <Link className="card-link" to={"/pokemon/" + pokemon.id}>
                    <Card key={pokemon.id} className="pokemon-card">
                        <Card.Img src={pokemon.img ? pokemon.img : pokemon.sprites.front_default} />
                        <h3 className="text-center text-light">{pokemon.name}</h3>
                    </Card>
                </Link>
            ))}
        </div>
    );
}

export default CreateCards;