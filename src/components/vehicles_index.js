import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVehicles } from '../actions';
import { centsToDollars } from '../utils/utility_functions';

class VehiclesIndex extends Component {

  componentDidMount() {
    this.props.fetchVehicles();
  }

  renderVehicleList() {
    return _.map(this.props.vehicles, vehicle => {
      console.log('Inside renderVehicleList =')
      console.log(vehicle);

      $(function() {
        $(".favorites-heart").on("click", function() {
          $(this).toggleClass("is-active");
        });
      });

      return (
        <div className="card p-3 col-sm card-inverse" key={vehicle.id}>
          <div className="favorites-heart-stage">
            <div className="favorites-heart"></div>
          </div>
          <Link to={`/vehicles/${vehicle.id}`}>
            <img className="vehicle-index img card-img-top" alt="Card image" src={ vehicle.exterior_color_info.fair_colored_image}></img>
            <div className="card-img-overlay">
              <span className="vehicle-text title">
                { vehicle.model_year } { vehicle.make }
              </span>
              <span className="vehicle-text model-subtitle text-muted">
                 { vehicle.model } { vehicle.trim }
              </span>
              <span className="vehicle-text as-low-as">As low as</span>
              <span className="vehicle-text monthly-cost">
                { centsToDollars(vehicle.product_financials[0].monthly_payment_cents) }
              </span>
              <span className="vehicle-text per-month">Per Mo. </span>
              <span className="vehicle-text start-fee text-muted">
                Start Fee: { centsToDollars(vehicle.product_financials[0].start_fee_cents) }
              </span>
            </div>
          </Link>
        </div>
      );
    });
  }

  render() {
    console.log('From inside the posts_index render:');
    console.log('this.props.vehicles = ');
    console.log(this.props.vehicles);

    const { vehicles } = this.props;

    if (!vehicles) {
      console.log('no vehicles in this.props');
      return <div className="loading-div">Loading...</div>;
    }

    return (
      <div>
        <div className="vehicle-index-wrapper-grid">
          { this.renderVehicleList() }
        </div>
        <div className="page-selector">
          <p>Page 1 of ?</p>
        </div>
      </div>

    );
  }

}

function mapStateToProps(state) {
  return { vehicles: state.vehicles };
}

export default connect(mapStateToProps, { fetchVehicles })(VehiclesIndex);
