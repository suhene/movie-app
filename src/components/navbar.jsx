import './navbar.css';
import logo from './logo.png'
export const Navbar = () =>{
    return(
        <div className='navbar'>
        <div style={{maxWidth:'1100px',margin:'auto'}}>
            <nav style={{display:'flex',justifyContent:'space-between'}}>
                <img src={logo} alt="" style={{width:'100px',height:'90px',paddingBottom:'10px'}}/>
                <ul style={{display:'flex',listStyle:'none',alignItems:'center'}}>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/comingSoon'>Coming Soon</a></li>
                    <li><a href='/order'>Order</a></li>
                    <li><a href='/bonus'>Price and Bonus</a></li>
                </ul>
            </nav>
        </div>
        </div>
    )
}