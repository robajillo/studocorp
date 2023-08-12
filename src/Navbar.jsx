
import './App.css'


function Navbar() {
    return <div>
         <div className="top">
					<div className="container">
						
							
							<div className="col-md-6 top-middle">
								<ul>
									<li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa-brands fa-google-plus"></i></a></li>
									<li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
								</ul>
							</div>
							<div className="col-md-6 top-left">
								<ul>
									<li><i className="fa fa-mobile" aria-hidden="true"></i> +254 718 699 516</li>
									<li><i className="fa fa-map-marker" aria-hidden="true"></i>  Nairobi, Kenya </li>
								</ul>
							</div>
							<div className="clearfix"></div>
						
					</div>
				</div>

                
    <nav>
        <a href="">StudoCorp</a>
        <div>
            <a href="">Home</a>   
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Gallery</a>
            <a href="">Contact</a>
        </div>
    </nav>
    </div>;
}



export default Navbar;

