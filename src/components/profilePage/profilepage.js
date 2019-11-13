 import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// import Camera from "@material-ui/icons/CameraEnhance"
// core components
// import Header from "./Header";
import Footer from "./Footer";
import Button from "../Button/Button";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
// import HeaderLinks from "./HeaderLinks";
import NavPills from "./NavPills";
// import Parallax from "./Parallax";
import Bar from '../AppBar/AppBar'
import axios from 'axios'
import profile from "../../assets/img/faces/christian.jpg";

import studio1 from "../../assets/img/examples/studio-1.jpg";
import studio2 from "../../assets/img/examples/studio-2.jpg";
import studio3 from "../../assets/img/examples/studio-3.jpg";
import studio4 from "../../assets/img/examples/studio-4.jpg";
import studio5 from "../../assets/img/examples/studio-5.jpg";
import work1 from "../../assets/img/examples/olu-eletu.jpg";
import work2 from "../../assets/img/examples/clem-onojeghuo.jpg";
import work3 from "../../assets/img/examples/cynthia-del-rio.jpg";
import work4 from "../../assets/img/examples/mariya-georgieva.jpg";
import work5 from "../../assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "../../assets/jss/material-kit-react/views/profilePage.jsx";

import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import './ProfilePage.css'
import WorkSection from '../InputSection/Inputs'
class ProfilePage extends React.Component {

  componentDidMount() {
    
    const headers = {
      'Content-Type': 'application/json',
      'x-auth': this.props.token,
    };

    axios.get('http://localhost:3001/users/me', {headers})
    .then(user => {
      this.setState({name: user.data.name, email: user.data.email})
    })
  }
  state = {
    name: null,
    email: '',
    fileSelected: null
  }

  fileSelectHandler = event => {
    
    this.setState({fileSelected: event.target.files[0]})
  }

  fileUploadHandler = () => {
    console.log(this.state.fileSelected)
    axios.post('http://localhost:3001/profile/upload', {
      file: this.state.fileSelected
    })
    .then(res => {
      console.log(res)
    })
  }

  onLangChange = () => {
    setTimeout(() => {
        if (this.props.lang !== 'English') {
            this.props.history.push("/" + this.props.lang)
         } else {
             this.props.history.push("/")
         }
    }, 10)
  }
  changeMode = () => {
    this.props.onChangeModes();
    document.querySelector('body').classList.toggle('dark')
  }
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    
    return (
      <div>
        <Bar 
          saveStarred={() => this.props.history.push('/starred')} 
          now="Starred"
          mySelf={() => this.props.history.push('/About')}
          onLangChange={(data) => {this.props.onLangChange(data); this.onLangChange()}}
          
          items={['Somali', 'Arabic', 'English']}
          lang={this.props.lang}
          disabled={true}
          
          dark={this.props.dark}
          chaneMode={this.changeMode}/>
        {/* <Header
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        /> */}
        {/* <Parallax small filter image={require("../../assets/img/profile-bg.jpg")} /> */}
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div style={{marginTop: '200px'}}>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div className="container">
                      <img src={profile} alt="..." className={[imageClasses, "image"].join(' ')} />
                      <div className="middle">
                        <Camera className="text" onClick={() => alert("Changing Profile Picture")}/>
                      </div>
                    </div>
                    <input type="file" onChange={this.fileSelectHandler}/>
                    <button onClick={this.fileUploadHandler}>Upload</button>
                    <WorkSection email={this.state.email} name={this.state.name}/>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{this.state.name}</h3>
                      <h6>DESIGNER</h6>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <Camera />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  An artist of considerable range, Chet Faker — the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure.{" "}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Studio",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang.lang.textContent,
  dark: state.quote.dark,
  token: state.auth.auth
})
const mapDispatchToProps = dispatch => ({
  onLangChange: (lang) => dispatch(actions.langChange(lang)),
  onChangeModes: () => dispatch(actions.darkMode())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(profilePageStyle)(ProfilePage));
