import React from 'react';
import Avatar from './Avatar/Avatar';
import './Preview.css';
import PropTypes from 'prop-types';

const Preview = (props) => (
  <div className="previewBox">
    <h3>HCARD PREVIEW</h3>
    <div className="vcard">
      <div className="header">
        <div className="previewName">
          <h1 className="fn">{`${props.contact.givenName} ${props.contact.surname}`}</h1>
        </div>
        <Avatar 
          image={props.image} 
          imageSize={{ width: 120, height: 150 }}/>
      </div>
      <div className="previewBody">
        <div className="previewDetail">
          <div className="previewLabel">EMAIL:</div>
          <div className="previewData email">{props.contact.email}</div>
        </div>
        <hr />
        <div className="previewDetail">
          <div className="previewLabel">PHONE:</div>
          <div className="previewData tel">{props.contact.phone}</div>
        </div>
        <hr />
        <div className="previewDetail">
          <div className="previewLabel">ADDRESS:</div>
          <div className="previewData street-address">{`${props.contact.number} ${props.contact.street}`}</div>
        </div>
        <hr />
        <div className="previewDetail">
          <div className="previewLabel" style={{ opacity: '0' }}>text</div>
          <div className="previewData"><span className="locality">{`${props.contact.suburb}${props.contact.suburb ? ',' : ''} `}</span><span className="region">{props.contact.state}</span></div>
        </div>
        <hr />
        <div className="previewFoot">
          <div className="footContainerPost">
            <div className="previewPostcode">POSTCODE</div>
            <div className="previewPostdata postal-code">{props.contact.postCode}</div>
          </div>
          <div className="footContainerCountry">
            <div className="previewCountrycode">COUNTRY</div>
            <div className="previewCountrydata country-name">{props.contact.country}</div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
);

Preview.propTypes = {
  contact: PropTypes.object,
  image: PropTypes.string
};

export default Preview;