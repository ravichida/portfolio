import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class app extends React.Component {
  constructor(props) {
    super(props);
    this.openModel = this.openModel.bind(this);
    this.closeModel = this.closeModel.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.navRef = React.createRef();

    this.state = {
      nav: ["Portfolio", "About me", "Experience", "Contact me"],
      img: ["projects_page-0051.jpg", "projects_page-0052.jpg", "projects_page-0071.jpg", "projects_page-0037.jpg", "projects_page-0001.jpg", "projects_page-0015.jpg"],
      portfolioModalImg: "",
      isModalOpen: false,
      experience: [
        {
          companyName: "Freelancer",
          designation: "Sr. UI Developer",
          tenure: "May 2017 to Till Date"
        },
        {
          companyName: "Techmojo Pvt Ltd.",
          designation: "Sr. UI Developer",
          tenure: "Sept 2016 to April 2017"
        },
        {
          companyName: "Helius Computech Pvt Ltd.",
          designation: "Sr. Front End Engineer",
          tenure: "Mar 2015 to April 2016"
        },
        {
          companyName: "Oxygen Networks Pvt. Ltd.",
          designation: "Sr. UI Engineer",
          tenure: "May 2014 to Dec 2014"
        },
        {
          companyName: "IVY Comptech Pvt. Ltd.",
          designation: "Sr. UI Design, Developer",
          tenure: "Dec 2007 to April 2014"
        },
        {
          companyName: "Oxygen Networks Pvt. Ltd.",
          designation: "UI Developer",
          tenure: "Dec 2004 to Nov 2007"
        },
        {
          companyName: "Indiainfo.com",
          designation: "Sr. Web Designer",
          tenure: "Feb 2000 to Nov 2004"
        },
        {
          companyName: "Hyderabad.com (CITI-NET)",
          designation: "Web Designer",
          tenure: "Sept 1998 to Jan 2000"
        },
        {
          companyName: "Miracle Media",
          designation: "Technical Consultant",
          tenure: "Jan 1997 to Sept 1998"
        },
        {
          companyName: "Prime Computers",
          designation: "Auto CAD Team Leader",
          tenure: "July 1995 to Dec 1996"
        }

      ]
    }
  }

  openModel = (img, event) => {
    event.preventDefault();
    console.log("Image Name", img);
    this.setState({
      portfolioModalImg: img,
      isModalOpen: true
    });
  }

  closeModel = (event) => {
    event.preventDefault();
    console.log("closeModel");
    this.setState({ isModalOpen: false });
  }

  /* Add Class example
  onAddClick = (e) => {
    this.navRef.current.classList.add("show");
   };
  */

  removeClass = (e) => {
    e.preventDefault();
    console.log("remove class");
    this.navRef.current.classList.remove("show");

    /*
    //  using getElementById
        var element = document.getElementById("collapsibleNavbar");
        element.classList.remove("show");
    */

  };

  // onToggleClick = (e) => {
  // e.preventDefault();
  // this.navRef.classList.toggle("show");
  // };



  render() {

    let mxWidth = window.innerWidth - 20;
    let maxwidth = window.innerWidth < 1200 ? { "maxWidth": mxWidth } : { "maxWidth": "800px" };
    // let maxwidth = { "maxWidth": mxWidth };
    // const maxwidth = { "maxWidth": "50%" };
    return (
      <div>
        {/* <Navbar /> */}
        {/* <nav className="navbar navbar-expand-sm sticky-top"> */}
        <nav className="navbar navbar-expand-sm">
          <img className="masthead-avatar mb-5 rounded-circle" width="60" height="60" src="./images/logo.jpeg" alt="" />
          {/* <!-- Toggler/collapsibe Button --> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon clearfix"></span><br className="clearfix" />
            <span className="navbar-toggler-icon clearfix"></span><br className="clearfix" />
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar" ref={this.navRef}>
            <ul className="navbar-nav">
              {this.state.nav.map((item, index) =>
                <li className="nav-item" key={index}>
                  <AnchorLink className="nav-link" onClick={(event) => this.removeClass(event)} href={'#' + item}>{item}</AnchorLink>
                  {/* <a className="nav-link" onClick={(event) => this.removeClass(event)} href={'#' + item}>{item}</a> */}
                </li>
              )}
            </ul>
          </div>
        </nav>
        {/* <Profile /> */}
        <div className="row">
          <div className="col-*-* mx-auto">
            <img className="masthead-avatar mb-5 rounded-circle" width="200" src="./images/RaviChida.jpg" alt="" /><br />
            <div className="name" >Ravi Kumar Chida</div>
          </div>
          <div className="col-*-* mx-auto align-middle" ><br /><br />
            <h3><a href="images/projects.pdf" alt="Download Portfolio"> Download Portfolio</a></h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <h4 className='title' id="Portfolio">Portfolio</h4>
          </div>
        </div>
        <div className='d-flex flex-wrap' id="Portfolio">
          {
            this.state.img
              .map((img, index) =>
                <div className='image align-content-center' key={index}>
                  <img className="" src={'./images/portfolio/' + img} onClick={(event) => this.openModel(img, event)} alt="" data-toggle="modal" data-target="#portfolioModal" />
                </div>
              )
          }
        </div>
        {/* <Modal /> */}
        <div className='row'>
          <div className='col-sm-12'>
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#portfolioModal">
              Open modal
            </button> */}
            {/* <button onClick={() => this.openModal()}>Open modal</button> */}
            {/* <div className="modal fade" id="orderModal" role="dialog"> */}
            {/* <div className="modal" id="portfolioModal" role="dialog" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}> */}
            <div className="modal" id="portfolioModal" role="dialog">
              <div className="modal-dialog" style={maxwidth}>
                {/* <div className="modal-dialog"> */}
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title"> </h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div className="modal-body">
                    {/* <img className="masthead-avatar mb-5 rounded-circle" width="200" src="./images/RaviChida.jpg" alt="" /> */}
                    <img className="" src={'./images/portfolio/' + this.state.portfolioModalImg} alt=""></img>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <h3 className='title' id="About me">About me</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <h4 className='title' id="Portfolio">Technical Skills</h4>
            <ul>
              <li>Web & Mobile Development – Using HTML5, CSS3, JavaScript, jQuery, React (reactjs).</li>
              <li>Front-end frameworks for developing responsive, mobile-first websites – Bootstrap and CSS, SASS.</li>
              <li >Responsive UI Development which supports Multi Device and Cross Browser Compatibility.</li>
              <li>Well versed in ( HTML5 / CSS / SASS / JavaScript ) programming concepts.</li>
              <li>Unit testing thoroughly and check whether the functionality working properly or not, testing with mock data / SIT & UAT.</li>
              <li>Fixing runtime errors if any</li>
              <li>Fixing the Bugs raised by testing team, debugging and resolving the issues on priority.</li>
              <li>Communicating with other teams / clients and providing status.</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <h4 className='title' id="Experience">Experience</h4>
            <table className="table table-striped olistTable">
              <tbody>
                <tr>
                  <th>Company Name</th>
                  <th>Designation</th>
                  <th>Tenure</th>
                </tr>
                {
                  this.state.experience
                    .map((exp, index) =>
                      <tr key={index}>
                        <td className="">{exp.companyName}</td>
                        <td className="">{exp.designation}</td>
                        <td className="">{exp.tenure}</td>
                      </tr>
                    )
                }
              </tbody>
            </table>
          </div>
          {/* <div className='col-xl-12'>
            {JSON.stringify(this.state.experience, null, 4)}
          </div> */}
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <h4 className='title' id="Contact me">Contact me</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <p>
              email: ravi.chanti@gmail.com<br />
              Ravi Kumar Chida, Flat No 402, Raghavendra Nilayam,<br />
              Plot No: 212A, Street No 10,<br />
              Addagutta, Western Hills, Kukatpally<br />
              HYDERABAD, TELANGANA 500085</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <p className='text-center' id="Portfolio">©2021 RaviChida.in. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    )
  }

}
export default app;
