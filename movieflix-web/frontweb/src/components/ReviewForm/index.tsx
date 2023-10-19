import React from 'react';
import './styles.css';


const ReviewForm = () => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("mudou " + event.target.value);
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("clicou no botao");
    }

    return (
        <div className="review-form-container base-card">

            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Deixe sua avaliação aqui"
                        onChange={handleChange}
                    />
                    <button type="submit" className="btn btn-primary save-button">
                        SALVAR AVALIAÇÃO
                    </button>
                </div>
            </form>

        </div>
    );
}


export default ReviewForm;