import React, { Component } from 'react';
// import './assets/plugins/jquery-ui-1.12.1.custom/jquery-ui.css'
import '../assets/styles/categories_styles.css'
import '../assets/styles/categories_responsive.css'
import PageNavigationBar from '../PageNavigationBar/pagenavigation'
import PerPage from '../PerPageDropdown/perpage'
import SortingDropdown from '../SortingDropDown/sortingdropdown'

import ProductCard from './productcard'


class ProductCategories extends Component {

  render() {
    return (
      <div className="row">
        <div className="col">
          <SortingDropdown />
          <div className="grid-product" style={{ "display": "flex", "flexFlow": "row wrap", "paddingTop": "20px", "height": "auto !important", "minHeight": "100px !important" }}>
            {this.props.productsList.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
          <div className="product_sorting_container product_sorting_container_bottom clearfix">
            <PerPage />
            <PageNavigationBar />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCategories;
