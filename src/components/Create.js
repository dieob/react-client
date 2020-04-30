import React, { Component } from 'react';
import './Create.scss';
import { createPostData } from '../actions'
import { connect } from 'react-redux';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


class Create extends Component {

  constructor(props) {
    super(props);

    this.submitHandle = this.submitHandle.bind(this);
    this.changeHandler = this.changeHandler.bind(this);

    this.state = {
      title: '',
      city: '',
      description: '',
      country: '',
      region: ''
    }
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }


  submitHandle(event) {
    const myObj = {
      id: null,
      title: this.state.title,
      city: this.state.city,
      description: this.state.description
    };
    event.preventDefault();

    this.props.createPost(myObj);
  }

  render() {
    return (
      <div className="main-container">
        <form onSubmit={this.submitHandle}>
          <div className="form-item">
              <input className="input-text-box" placeholder="Title" type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
              <label className="input-label">Title</label>
          </div>
          <div className="form-item">
              <textarea cols="40" rows="5" className="description-text-box" placeholder="Description" type="text" name="description" value={this.state.description} onChange={this.changeHandler} />
              <label className="input-label-description">Description</label>
          </div>
          <div className="form-item">
            <CountryDropdown
              className="dropdown"
              value={this.state.country}
              name="country"
              onChange={(val) => this.selectCountry(val)} />
          </div>
          <div className="form-item">
            <RegionDropdown
              className="dropdown"
              country={this.state.country}
              name="region"
              value={this.state.region}
              onChange={(val) => this.selectRegion(val)} />
          </div>
          <div className="form-item">
              <input className="input-text-box" placeholder="City" type="text" name="city" value={this.state.city} required onChange={this.changeHandler} />
              <label className="input-label">City</label>
          </div>
          <button className="button-submit"onClick={this.submitHandle}><h3>Post</h3></button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPostData(post))
  }
};

export default connect(
  null,
  mapDispatchToProps
)(Create);