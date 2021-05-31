import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const ContactVehiclePdf = ({ icon, name, info, contract, period, link }) => {
    return (
        <div className='contact-vehicle--component'>

                <img src={icon} alt=''/>
                <h3>{name}</h3>
                <p className='body'>{info}</p>
                {contract && <p className='body'>{contract}</p>}
                {period && <p className='body'>{period}</p>}
                {link && <a href={link}>View details (PDF)</a>}


        </div>
    );
};

export default ContactVehiclePdf;

ContactVehiclePdf.propTypes = {
    icon: PropTypes.any,
    title: PropTypes.string,
    info: PropTypes.string,
    contract: PropTypes.string,
    period: PropTypes.string,
    link: PropTypes.string,
};
