// results UI 
// this component render the card that contain the text genereated by pluma
// check <CustomCard> component


import React from 'react'
import { Button, Grid, TextareaAutosize, TextField } from '@material-ui/core'
import CustomCard from './CustomCard'
import Pagination from '@material-ui/lab/Pagination';
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from "recoil";
import {resultsState} from '../../Atoms/Atoms'

const useStyles = makeStyles({
    ul: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      justifyContent:'center'
    },
  });
function Result() {
    const classes = useStyles();

    const [page, setpage] = React.useState(1);
    const [pagesCount, setpageCount] = React.useState(0);
    const [itemsToDisplay, setitemsToDisplay] = React.useState([{}]);
    const [results,setResults] = useRecoilState(resultsState);

    const { items } = usePagination({
        count: pagesCount,
      });
    // const getItems_ = (p)=>{
    //     let res = [];
    //     let end = (p*3)>data.length?data.length:p*3;
    //     let start = end-p;
    //     if(p>1){
    //     for (let index = start; index <= end; index++) {
    //         res.push(data[index])
    //     }
    // }
    // else{
    //     for (let index = 0; index < 3; index++) {
    //         res.push(data[index])
    //     }
    // }
    //     return res;
    // };

    
    const handlePageChange = (p)=>{
        setpage(p);
        // setitemsToDisplay(getItems_(p));
    }


    // const itemsToDisplay = ()=>{
    //         return getItems_();
    // } 
    const data = [
        { 
            content:'ahahahhahahha hahahhaahah ahhahahhaha hahhaahahahhahahhahah ahhaahahahhahahhaha ahahhahahhahahah haahahahhahahhah ahahha 1'
        },
        {
            content:'hohoohohoh hohoohohoh hohoohohohhohoohohoh hohoohohohhohoohohohhoho ohohohhohoohohoh hohoohoh ohhohoohohohhohoohohoh 2'
        },
        {
            content:'hehehehehehe hehehehehehe heheheheheheheheheh ehehehehehehehehe 3'
        },
        { 
            content:'ahahahhahahha hahahhaahah ahhahahhaha hahhaahahahhahahhahah ahhaahahahhahahhaha hahhaahahahhahahhahahahha ahahahhahahhahahahhaah ahahhahahhahahah haahahahhahahhah ahahha 4'
        },
        {
            content:'hohoohohoh hohoohohoh hohoohohohhohoohohoh hohoohohohhohoohohohhoho ohohohhohoohohoh hohoohoh ohhohoohohohhohoohohoh 5'
        },
        {
            content:'hehehehehehe hehehehehehe heheheheheheheheheh ehehehehehehehehe 6'
        },
        {
            content:'hehehehehehe hehehehehehe heheheheheheheheheh ehehehehehehehehe 7'
        }
    ]
    React.useEffect(() => {
            setpageCount(Math.ceil(data.length/3));
           
    }, [data]);
  

const _minusPage = (p)=>{
    console.log('page------>',p)
}
const _addPage = ()=>{
    
}

    return (
        <Grid item md={12} xs ={12} style={{padding:'20px',height:'100%'}}>
       <div style={{background:'white',marginTop:'0px',padding:'5px',display:'flex',flexDirection:'column',background:'rgb(245,246,250)'}}>
            {
                results.data && typeof results.data=='object' ?
                results.data.map((elem,index)=>{
                    return <CustomCard index={index+1} content={elem} />
                })
                :
                <span style={{color:'white',fontWeight:'bold',fontSize:'15px',background:'#ff0033',padding:'10px',textAlign:'center'}}>{results.data}</span>
            }
            {/* <Pagination count={pagesCount} shape="rounded"  style={{alignSelf:'center'}} onChange={(e,page)=>{handlePageChange(page)}} page={page}/> */}
            {/* <nav>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button type="button" style={{ paddingLeft:'10px',paddingRight:'10px',outline:'none',color: selected ? '#6A7BFF' : '#cfcfcf' , fontWeight:'bold',border:'none',background:'transparent',borderBottom:selected ?'2px solid #6A7BFF':'none'}} {...item}>
                {page}
              </button>
            );
          } else {
            children = (
            
                type==='next'?<RightIcon onClick={(e,p)=>_minusPage(p)}  {...item}style={{width:20,height:24,fill:'#6A7BFF',marginLeft:'20px'}} />:<LeftIcon  onClick={()=>_minusPage(page)} {...item} style={{width:20,height:24,fill:'#6A7BFF',marginRight:'20px'}}/>
         
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav> */}
       </div>
       
</Grid>
    )
}

export default Result
