import React from 'react'
import logo from '../icons/logo.png';
import Search from '@material-ui/icons/Search'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstaIcon from '@material-ui/icons/Instagram';
import MenuIcon from '@material-ui/icons/Menu';

const SocialIcons = [
  {icon :[ <WhatsAppIcon className='social-icon'/> ]},
  {icon :[ <TwitterIcon />]},
  {icon :[ <FacebookIcon /> ]},
  {icon :[ <InstaIcon /> ]},
]

export default function Header() {
  return (
<>
<div className='header px-5'>
<div className='logo'>
<img src={logo} />
</div>
<nav class="navbar navbar-expand-lg navbar-light bg-transparent">
<a class="navbar-brand" href="#"> <img src={logo} /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"> <MenuIcon className='menuIcon'/> </span>
    </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Products</a></li>
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      <li class="nav-item searchnav"> <input type='search' /> <Search className='search-me' /> </li>
    </ul>
    </div>
</nav>

<div className='social-icons '>
<ul>
{SocialIcons.map((icons, index) => (
<li><a href=''>{icons.icon}</a></li>
))}
</ul>
</div>
</div>
</>
  )
}
