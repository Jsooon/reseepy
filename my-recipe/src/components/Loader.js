import CircularProgress from '@mui/material/CircularProgress';

export default function Loader(){
    return <div style={{width:500, margin:'auto', height:'calc(80vh)', display:'flex', justifyContent:'center', alignContent:'center'}}>
        <CircularProgress style={{alignSelf:'center', color:'#F78104'}} />
    </div>
}