import './styles.css';
import ReviewCard from "components/ReviewCard";


const ReviewList = () => {
    return (
        <div className='resultcard-review-container base-card'>

            {
                <div className='information-section'>
                    <div className='result-section'>
                        <div className='perfil-text'>Informações</div>
                        <ReviewCard title='Perfil: ' description='' />

                    </div>
                </div>
            }

        </div>
    )
}

export default ReviewList;

