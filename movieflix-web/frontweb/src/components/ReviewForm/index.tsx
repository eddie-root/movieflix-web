import ButtonIcon from "components/ButtonIcon";

const ReviewForm = () => {
    return (
        <div className='base-card form-container'>

            <form >
                <div className='mb-4'>
                    <input

                        type="text"
                        className="form-control base-input"
                        placeholder="Email"
                        name="username"
                    />
                </div>


                <div className='salvar-avaliacao'>
                    <ButtonIcon text='Fazer Login' />
                </div>

            </form>
        </div>
    );
}


export default ReviewForm;