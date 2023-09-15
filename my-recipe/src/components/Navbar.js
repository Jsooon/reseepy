import { Link, Outlet } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import { Box } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
export default function Navbar(){
    const [drawerOpen, setDrawerOpen] = useState(false)
    const anchor = 'left' 
    const location = useLocation().pathname
    const closeDrawer = () => {
        setDrawerOpen(false)
    }
    return (
    <>
        <Drawer
            anchor={anchor}
            open={drawerOpen}
            onClose={()=>{ setDrawerOpen(false);  }}
          >
            <Box sx={{width:300}}>
                <div style={{display:'flex', flexDirection:'column', gap:10, padding:20}}>
                    <Link className='linkItem' to='' onClick={()=>closeDrawer()}>
                        <div className={location == '/' ? 'currentSidebar' : ''} style={{display:'flex', alignItems:'center', gap:15}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="drawer-icon" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                            </svg>
                            <div>Home</div>
                        </div>
                    </Link>
                    <Link className='linkItem' to='/recipes' onClick={()=>closeDrawer()}>
                        <div className={location == '/recipes' || location.match('/recipe-details') ? 'currentSidebar' : ''} style={{display:'flex', alignItems:'center', gap:15}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="drawer-icon" viewBox="0 0 16 16">
                                <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"/>
                                <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"/>
                            </svg>
                            <div style={{}}>Recipes</div>
                        </div>
                    </Link>
                    <Link className='linkItem' to='/category' onClick={()=>closeDrawer()}>
                        <div className={location == '/category' ? 'currentSidebar' : ''} style={{display:'flex', alignItems:'center', gap:15}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="drawer-icon" viewBox="0 0 16 16">
                            <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                            <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                            </svg>
                            <div style={{}}>Categories</div>
                        </div>
                    </Link>
                    <Link className='linkItem' to='/favorites' onClick={()=>closeDrawer()}>
                        <div className={location == '/favorites' ? 'currentSidebar' : ''} style={{display:'flex', alignItems:'center', gap:15}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="drawer-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <div style={{}}>Favorites</div>
                        </div>
                    </Link>
                </div>
            </Box>
          </Drawer>
        <svg onClick={()=>{ setDrawerOpen(true) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="burger">
            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
        </svg>

        <div className="navbar">
            <div style={{fontWeight:'800', color:'white', fontSize:30, height:'fit-content'}}>RE<span style={{color:'black'}}>SEE</span>PY</div>
            <div className="urls">
                <div>
                    <Link className={location == '/' ? 'currentTopbar' : ''} to=''><span>HOME</span></Link>
                    <Link className={location == '/recipes' || location.match('/recipe-details') ? 'currentTopbar' : ''} to='recipes'><span>RECIPES</span></Link>
                    <Link className={location == '/category' ? 'currentTopbar' : ''} to='category'><span>CATEGORY</span></Link>
                    <Link className={location == '/favorites' ? 'currentTopbar' : ''} to='/favorites' ><span>FAVORITES</span></Link>
                </div>
            </div>
        </div>

        <Outlet />
    </>
    );
}