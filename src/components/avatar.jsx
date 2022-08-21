export const Avatar = ({movieData}) =>{
    return(
       <img src={movieData.image} alt="" style={{width:'240px', height:'320px',borderRadius:'15px',border:'2px solid black'}} />
    )
}