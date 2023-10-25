import './styles.css';
import ReviewForm from "components/ReviewForm";
import ReviewList from "components/ReviewList";

const MovieDetails = () => {


    return (
        <div className="reviews-container">
            <h4>Tela detalhes do filme id:</h4>
            <ReviewForm />

            <ReviewList />

        </div>
    )
}

export default MovieDetails;