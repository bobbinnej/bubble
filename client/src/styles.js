import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>({
    appBar:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        
        
       
    },
    title:{
       marginLeft:'30px',
       marginRight:'15px',
       fontSize:'30px'
    },
    logo:{
        objectFit:'contain'
    }
}))