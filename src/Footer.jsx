import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpg";
import blog5 from "./assets/blog5.jpg";
import blog6 from "./assets/blog6.png";

function Footer() {
    return <div>
        <section className="w3l-footer-29-main">
	<div className="footer-29 py-5 ">
	  <div className="container">
		<div className="grid-col-4 footer-top-29">
			<div className="footer-list-29 footer-1">
				<h2 className="footer-title-29">Contact Us</h2>
				<ul>
					<li><p><span className="fa fa-map-marker"></span>Nairobi Kenya</p></li>
					<li><a href="tel:+7-800-999-800"><span className="fa fa-phone"></span> +254 718 699 516</a></li>
					<li><a href="mailto:estate-mail@support.com" className="mail"><span className="fa fa-envelope"></span> Info@Studocorp.Com</a></li>
				</ul>
				<div className="main-social-footer-29">
					<a href="#facebook" className="facebook"><span className="fa-brands fa-facebook"></span></a>
					<a href="#twitter" className="twitter"><span className="fa-brands fa-twitter"></span></a>
					<a href="#instagram" className="instagram"><span className="fa-brands fa-instagram"></span></a>
					<a href="#google-plus" className="google-plus"><span className="fa-brands fa-google-plus"></span></a>
					<a href="#linkedin" className="linkedin"><span className="fa-brands fa-linkedin"></span></a>
				</div>
			</div>
			<div className="footer-list-29 footer-2">
				<ul>
					<h6 className="footer-title-29">Category</h6>
					<li><a href="#pages">Corporate Travel</a></li>
					<li><a href="#pages">Long Distance Travel</a></li>
					<li><a href="#pages">Executive Travel</a></li>
					<li><a href="#pages">SuperAir Agent</a></li>
					<li><a href="#pages">Accommodation</a></li>
				</ul>
			</div>
			<div className="footer-list-29 footer-3">
				<div className="properties">
					<h6 className="footer-title-29">Latest Gallery</h6>
					<div className="images-col">
					<a href=""><img src={blog1} className="img-responsive footer-img" alt=""/></a>
					<a href=""><img src={blog2} className="img-responsive footer-img" alt=""/></a>
					<a href=""><img src={blog3} className="img-responsive footer-img" alt=""/></a>
					<a href=""><img src={blog4} className="img-responsive footer-img" alt=""/></a>
					<a href=""><img src={blog5} className="img-responsive footer-img" alt=""/></a>
					<a href=""><img src={blog6} className="img-responsive footer-img" alt=""/></a>
				</div>
			</div>
			</div>
			<div className="footer-list-29 footer-4">
				<ul>
					<h6 className="footer-title-29">Travel &amp; Trip</h6>
					<li><a href="#url">	Bahamas</a></li>
					<li><a href="#url">	Cambodia</a></li>
					<li><a href="#url">Dominica</a></li>
					<li><a href="#url">	Egypt</a></li>
					<li><a href="#url">Germany</a></li>
				</ul>
			</div>
		</div>
		<div className=" bottom-copies text-center">
			<p className="copy-footer-29">© 2023 . All rights reserved | Designed by <a href="//w3layouts.com">StudoCorp</a></p>
		  </div>
		</div>
	</div>
  </section>
    </div>
}

export default Footer;