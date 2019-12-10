import React, { Component } from 'react';
import BikeList from './../../components/bikeLists/BikeLists';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';

class BikeListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bikes: []
        };
    }

    componentDidMount() {
        callApi('bikes', 'GET', null).then(res => {
            this.setState({
                bikes: res.data
            });
        });
    }


    render() {
        var bikes = this.state.bikes;
        console.log(bikes);
        return (

            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh sách xe của công ty</h3>
                </div>
                <div className="panel-body">
                    <div className="container">
                        <div className="form-group">                          
                            <Link to="bike/add" className="btn btn-primary">
                                <span className="fa fa-plus mr-5"></span>Thêm Xe
                            </Link>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">                           
                            {bikes ? <BikeList bikes={bikes} /> : ''}
                        </div>
                    </div>
                </div>
            </div>


        );
    }

}

const mapStateToProps = state => {
    return {
        bikes: state.bikes
    }
}

export default connect(mapStateToProps, null)(BikeListPage);