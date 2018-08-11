import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVehicle } from '../actions';
import { Link } from 'react-router-dom';

class VehicleDetail extends Component {
  componentDidMount() {
    if(!this.props.vehicle) {
      const { id } = this.props.match.params;
      this.props.fetchVehicle(id);
    }
  }

  render() {
    const { vehicle } = this.props;
    console.log(vehicle);

    if (!vehicle) {
      return <div>Loading...</div>;
    }

    return (
        <div>
          <Link className="btn btn-secondary" to="/">Back To Index</Link>
          <button className="btn btn-danger pull-xs-right">Button</button>
          <div className="post-body">
            <h3>{vehicle.model}</h3>
            <img className="vehicle-index-image" src={ vehicle.image_location_list[0]}></img>
            <h6>{ vehicle.model_year } { vehicle.make } { vehicle.model } { vehicle.trim } </h6>
            <ul>
              <li>Body Style: { vehicle.body_style }</li>
              <li>Milage: { vehicle.mileage }</li>
              <li>Condition: { vehicle.new_used_flag }</li>
              <li>VIN: { vehicle.id }</li>
              <li>Montly Payment: </li>
              <li>Start Fee: </li>
              <li>Finance ID: </li>
            </ul>
          </div>
        </div>
    );
  }
}

function mapStateToProps({ vehicles }, ownProps) {
  return { vehicle: vehicles[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchVehicle })(VehicleDetail);
