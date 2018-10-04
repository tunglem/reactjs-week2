import React, { Component } from 'react';
import '../assets/styles/categories_styles.css';
import '../assets/styles/categories_responsive.css';

class FilterByName extends Component {

  constructor(props) {
    super(props);

    // Define component state
    const { categories, defaultCategoryId } = this.props;
    console.log(categories)
    // const categories = this.props.categories;
    // const defaultCategoryId = this.props.defaultCategoryId;
    console.log('a', typeof categories);
    this.state = {
      selectedCategoryId: categories.length > 0
        ? ((defaultCategoryId && categories.findIndex(x => x.id === defaultCategoryId) >= 0 && defaultCategoryId) || categories[0].id)
        : '',
    };

    this.handleItemClick = this.handleItemClick.bind(this);
    // binding `this` of component
    //
  }

  handleItemClick(category) {
    // Update state: currentSelectedCategory
    this.setState({ selectedCategoryId: category.id });

    // Trigger callback (if any) on selected item changed
    const { onSelectedOptionChanged } = this.props;
    if (onSelectedOptionChanged) {
      onSelectedOptionChanged(category);
    }
  }
  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  render() {
    return (
      <React.Fragment>
        <div className="sidebar_section">
          <div className="sidebar_title">
            <h5>Product Category</h5>
          </div>
          <ul className="sidebar_categories">
            {this.props.categories.map(category => (
              <li
                key={category.id}
                className={` ${category.id === this.state.selectedCategoryId ? 'active is-checked' : ''}}`}
                onClick={() => this.handleItemClick(category)}
              >
                <a style={{ "cursor": "pointer" }}>
                  <span style={{ "magrinLeft": "5px" }}>
                    {
                      category.id === this.state.selectedCategoryId ?
                        <i className="fa fa-angle-double-right" aria-hidden="true" /> : ''
                    }
                  </span>
                  {this.Capitalize(category.name)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment >

    );
  }
}

export default FilterByName;
