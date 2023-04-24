import React from "react";
import './Footer.css'

function Footer(){
    return(
        <div class="footer-basic">
        <footer>
            <div class="social"><a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a><a href="https://www.snapchat.com/en-US"><i class="fa fa-snapchat"></i></a><a href="https://twitter.com/"><i class="fa fa-twitter"></i></a><a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">db construction © 2023<br />Unofficial</p>
        
        </footer>
    </div>
    );

}
export default Footer