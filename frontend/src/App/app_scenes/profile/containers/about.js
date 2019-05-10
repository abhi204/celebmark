import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { largeProfileUrl } from '_consts/dummy';
import { connect } from 'react-redux';
import './about.css';
import HandlesList from '../components/handles';

class AboutTab extends Component {
    render(){
        const { profile } = this.props;
        return (
            <div>
                <MDBContainer fluid className="p-0 overflow-auto overflow-hidden position-relative" style={{ minHeight: "65vh" }}>
                <HandlesList handles={profile.handles} />
                    <div className="text-uppercase position-absolute pl-0 head-line">
                        <span id="category-text">{profile.category} {'//'} </span>
                        <br/>
                        <span style={{backgroundColor: "white"}}>{profile.first_name}</span>
                        <br/>
                        <span style={{backgroundColor: "white"}}>{profile.last_name}</span>
                    </div>
                        <img alt={profile.full_name} className="float-right mr-5" src={largeProfileUrl} style={{maxHeight: "34rem",zIndex: -9,}} />
                </MDBContainer>
                <MDBRow>
                    <MDBCol size="5"> </MDBCol>
                    <MDBCol size="7">
                        <MDBContainer className="p-0 pt-5 pb-3" >
                            <p style={{whiteSpace: 'pre-line'}}>
                                { profile.description }
                            </p>
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}

let mapStateToProps = (state) => (
    {
        profile: state.profile
    }
)

export default connect(mapStateToProps)(AboutTab);