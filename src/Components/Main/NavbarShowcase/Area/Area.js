import React, { useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert'
import { useDispatch, useSelector } from "react-redux";
 import setGig from "../../../../Redux/Actions/GigActions";
import './area.css';
import Logo2 from '../../../../images/card-icons/Icon-move.svg';
import Logo3 from '../../../../images/card-icons/Icon-pin.svg';
import Logo4 from '../../../../images/card-icons/Icon-globe.svg';
import Logo5 from '../../../../images/card-icons/Icon-color-palette.svg';
import Logo6 from '../../../../images/card-icons/Icon-briefcase.svg';
import Logo7 from '../../../../images/card-icons/Group-288.svg';

const Area = () => {

  const dispatch = useDispatch();

  const fetchProducts = async () => {
   const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log("Data Loaded", response.data);
        dispatch(setGig(response.data));
        swal("Great", "All Gigs Were Fetched Successfully", "success");

      })
      .catch((err) => {
        console.log("Err: ", err);
            swal({
            title: "!Oops.",
            text: "An Error Occured While Loading Data. Reload Page",
            icon: "warning",
          });
      });

if(response){

}


  };

  useEffect(() => {
    fetchProducts();
  }, []);


  
  const {allGig} = useSelector((state) => state);
  // console.log(allGig.gigs);

  const renderGigs = allGig.gigs.map((gig) => {
    // const { id, title, image, price, category } = product;

      return (

        <tr key={gig.id}>
                                        <td className="my-checkbox"><input type="checkbox"/></td>
                                        <td>{gig.name}</td>
                                        <td>{gig.company.name}</td>
                                        <td>20th, June 2020</td>
                                        <td>20,000 - 30,000</td>
                                        <td><button className="btn">Delete</button></td>
        </tr>
    );


  });


  return (<
    div className="area" >
<
    div className="navbar-showcase" >
<
    div className="navbar-form" >
< /
    div > <
    div className="navbar-items" >



        <
    /div>




        <
    /div>

        <br />
        <br />

        <div className="navbar-showcase">




<a href="/"><div className="area-cards flex">
<img src={Logo2} className="" alt="logo" /><span className="mt-1">Keyword</span><i className="fas fa-chevron-down"></i>
</div></a>
<a href="/"><div className="area-cards flex">
<img src={Logo3} className="" alt="logo" /><span  className="mt-1" >Location</span><i className="fas fa-chevron-down"></i>
</div></a>
<a href="/"><div className="area-cards flex">
<img src={Logo4} className="" alt="logo" /><span  className="mt-1" >Remote</span>
</div></a>
<a href="/"><div className="area-cards flex navbar-showcase-active">
<img src={Logo5} className="" alt="logo" /><span  className="mt-1" >Design</span><i className="fas fa-check"></i>
</div></a>
<a href="/"><div className="area-cards flex">
<img src={Logo6} className="" alt="logo" /><span  className="mt-1" >Contract</span>
</div></a>






                                  < /div>


                                  <br />
                                  <br />


                                  <table id="" className="my-table" cellSpacing="0" width="100%">
                                    <thead>
                                      <tr>
                                                                                      <th>
                                        </th>
                                        <th className="th-sm">Role

                                        </th>
                                        <th className="th-sm">Company

                                        </th>
                                        <th className="th-sm ">Date<a href="/"><img  src={Logo7} className="table-sort-icon" alt="logo" /></a>

                                        </th>
                                        <th className="th-sm ">Salary($)<a href="/"><img src={Logo7} className="table-sort-icon" alt="logo" /></a>

                                        </th>
                                        <th className="th-sm">.

                                        </th>

                                      </tr>
                                    </thead>
                                    <tbody>


{renderGigs}





                                      </tbody>

                                  </table>




                                  < /
    div >

                                  )
}




export default Area;