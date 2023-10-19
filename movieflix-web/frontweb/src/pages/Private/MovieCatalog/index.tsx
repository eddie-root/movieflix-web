import './styles.css';
import { Link } from 'react-router-dom';

const MovieCatalog = () => {
    return (
        <div className='movies-container'>
            <h4>Tela listagem de filmes</h4>

            <Link to="/movies/1" >
                <p className='container-movies1'>Acessar /movies/1</p>
            </Link>
            <Link to="/movies/2" >
                <p className='container-movies2'>Acessar /movies/2</p>
            </Link>
        </div>
    )
}

export default MovieCatalog;
