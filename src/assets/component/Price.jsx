
import PropTypes from 'prop-types';

const Price = ({option}) => {
    const {option_name,price,validity_days,includes} = option
    return (
        <div>
            <h2>Price {price}</h2>
        </div>
    );
};
Price.PropTypes ={
    option : PropTypes.object
}


export default Price;