import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Booking.css';
import { Card, Container, Row } from 'react-bootstrap';


class Booking extends Component {
	render() {
		return (
			<Container>
			<Card>
			  <Card.Header as="h5">Book a Party!!!</Card.Header>
			  <Card.Body>
				<form>
					<Row className="justify-content-md-center">

	                <div className="form-group">
	                    <label>Email address</label>
	                    <input type="email" className="form-control" placeholder="Enter email" />
	                
	                    <label>Phone Number</label>
	                    <input type="phone" className="form-control" placeholder="Enter your phone number" />
	               
	                    <label>Date</label>
	                    <input type="date" className="form-control" placeholder="" />
	                </div>

	                <div className="form-group justify-content-md-center">
	                    <label>Venue</label>
	                    <input type="text" className="form-control" placeholder="Enter the address of the party's venue" />

	                    <label>Duration</label>
	                    <input type="number" className="form-control" placeholder="Enter the duration of the party" />

	                    <label>Plan</label>
	                    <input type="text" className="form-control" placeholder="Enter party's plan" />
	                </div>

	                </Row>
	                <button type="submit" className="btn btn-warning">Submit</button>
	                

            	</form>
            	</Card.Body>
            	</Card>
			</Container>
		)
	}
}


export default Booking;