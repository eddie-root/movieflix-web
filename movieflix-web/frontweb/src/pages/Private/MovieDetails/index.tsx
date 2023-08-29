import './styles.css';
import ReviewForm from "components/ReviewForm";
import ReviewList from "components/ReviewList";

const MovieDetails = () => {
    return (
        <div className="container">
            <h1>Tela detalhes do filme id:</h1>
            <ReviewForm />
            <ReviewList />

        </div>
    )
}

export default MovieDetails;