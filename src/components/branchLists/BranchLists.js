import React, { Component } from 'react';
import BranchItems from './../../components/branchItems/BranchItems';
import callApi from './../../utils/apiCaller';

class BranchLists extends Component {

    onDelete = (id) =>{
        console.log(id);
        callApi(`branches/${id}`, 'DELETE', null).then(res => {
            console.log(res);         
       });
        
    }

    render() {
        let { branchs } = this.props;      
        return (
            <div className="row mt-15">
                <div className="col-xs-20 col-sm-20 col-md-20 col-lg-20">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr className="warning">
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên cửa hàng</th>
                                <th className="text-center">Địa chỉ</th>                               
                                <th className="text-center">Trạng thái</th>
                                <th className="text-center">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {branchs ? this.showbranchs(branchs) : ''}
                        </tbody>
                    </table>
                </div>
            </div>


        );
    }
    showbranchs(branchs) {      
        var result = null; 
        var listBranches = branchs.listBranches;            
        if (listBranches && listBranches.length > 0) {
            result = listBranches.map((branch, index) => {
                return (
                    <BranchItems
                        key={index}
                        branch={branch}
                        index={index}
                        onDelete = {this.onDelete} >                            
                    </BranchItems>
                );
            });
        }
        return result;
    };
}

export default BranchLists;