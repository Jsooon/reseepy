export default function SearchNotFound({search}){
    return <div style={{height: '50vh', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}>
        <div style={{fontSize:100, textAlign:'center'}}>🤷</div>
        <div style={{fontSize:20, textAlign:'center', color:'rgb(35,35,37)', fontSize:"small"}}>No Recipes found for "{search}".</div>
    </div>
}