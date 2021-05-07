import React from 'react';

class app extends React.Component {
  constructor(props) {
    super(props);
    // this.sortUsers = this.sortUsers.bind(this);
    // this.editData = this.editData.bind(this);
    // this.updateApp = this.updateApp.bind(this);
    // this.removeData = this.removeData.bind(this);
    this.state = {
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
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-*-*">
            <img class="masthead-avatar mb-5 rounded-circle" width="200" src="./images/RaviChida.jpg" alt="" />
          </div>
          <div class="col-*-* mx-auto align-middle" ><br /><br />
          <h3><a href="images/projects.pdf" alt="Ravi Kumar Chida Portfolio"> Ravi Kumar Chida Portfolio</a></h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12'>
            <h4 className='my-3'>Experience</h4>

            <table className="table table-striped olistTable">
              <tbody>
                <tr>
                  <th>Company Name</th>
                  <th>Designation</th>
                  <th>Tenure</th>
                </tr>
                {
                  this.state.experience
                    .map(exp =>
                      <tr>
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
      </div>
    )
  }

}
export default app;
