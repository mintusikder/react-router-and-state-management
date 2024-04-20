import PropTypes from 'prop-types';
import Features from './Features';

const Price = ({ option }) => {
    const { features, price } = option;
    return (
        <div>
            <h2>Price {price}</h2>
            {
                features.map((feature, i) => (
                    <Features
                        key={i}
                        feature={feature}
                    />
                ))
            }
        </div>
    );
};

Price.propTypes = {
    option: PropTypes.object
};

export default Price;
