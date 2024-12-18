import PropTypes from 'prop-types';
const GetSaludoGoku = (nombre) => {
    return(`Hola ${nombre}, soy Goku, te mando un saludo`);
}

const nombre = 'Alvaro'

export const FirstApp = ({title, subtitle}) => {
    return(
        <>
            <h1>{ title }</h1>
            <h1>{ subtitle }</h1>
            <div>
                {GetSaludoGoku(nombre)}
            </div>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}