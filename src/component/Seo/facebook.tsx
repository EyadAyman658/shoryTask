import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

export const Facebook = ({ url, type, title, desc, image, locale, facebookCatalog }:any) => (
  <>
    <Helmet>
      <meta property="og:locale" content={locale}/>
      <meta property="og:url" content={url}/>
      <meta property="og:type" content={type}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={desc}/>
      <meta property="og:image" content={image}/>
      <meta property="og:image:alt" content={desc}/>
    </Helmet>
    {!!facebookCatalog &&
    <Helmet>
      <meta property="og:price:amount" content={facebookCatalog.amount}/>
      <meta property="og:price:currency" content={facebookCatalog.currency}/>
      <meta property="product:brand" content={facebookCatalog.brand}/>
      <meta property="product:availability" content={!!facebookCatalog.availability?'available for order':'discontinued'}/>
      <meta property="product:condition" content={facebookCatalog.condition}/>
      <meta property="product:locale" content={locale}/>
      <meta property="product:price:amount" content={facebookCatalog.amount}/>
      <meta property="product:price:currency" content={facebookCatalog.currency}/>
      <meta property="product:retailer_item_id" content={facebookCatalog.retailer_item_id}/>
    </Helmet>
    }
  </>
)

Facebook.propTypes = {
  url: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string
}

Facebook.defaultProps = {
  type: 'website',
  name: null
}
