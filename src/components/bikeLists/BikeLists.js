import React, { Component } from 'react';
import BikeItems from './../../components/bikeItems/BikeItems';
import callApi from './../../utils/apiCaller';

class BikeLists extends Component {

    onDelete = (id) =>{
        console.log(id);
        callApi(`bikes/${id}`, 'DELETE', null).then(res => {
            console.log(res);           
       });
        
    }

    render() {
        let { bikes } = this.props;      
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr className="warning">
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên xe</th>
                                <th className="text-center">Động cơ</th>
                                <th className="text-center">Giá thuê</th>
                                <th className="text-center">Giá đặt cọc</th>
                                <th className="text-center">Trạng thái</th>
                                <th className="text-center">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bikes ? this.showbikes(bikes) : ''}
                        </tbody>
                    </table>
                </div>
            </div>


        );
    }
    showbikes(bikes) {      
        var result = null; 
        var listBike = bikes.listBike;            
        if (listBike && listBike.length > 0) {
            result = listBike.map((bike, index) => {
                return (
                    <BikeItems
                        key={index}
                        bike={bike}
                        index={index}
                        onDelete = {this.onDelete} >                            
                    </BikeItems>
                );
            });
        }
        return result;
    };
}

export default BikeLists;