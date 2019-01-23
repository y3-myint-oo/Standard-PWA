import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addData,removeData } from '../../actions/data_action';

class DataList extends Component {
    render() {
        console.log('[Data] this.props', this.props);
        return(
            <div>
                <h4>Datas</h4>   
                <ul className="list-group">
                {
                    this.props.datas.map(data => {
                    return (
                        <div>
                        <li key={data.id} className="list-group-item">
                            <div className="list-item">{data.name}</div>
                        </li>
                            <button onClick={() => this.props.removeData(data)}>
                                x
                            </button>    
                        </div>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        datas: state.datas,
    };
  }
  
export default connect(mapStateToProps, { addData,removeData })(DataList);
  