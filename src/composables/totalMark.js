let caculation=(arrys)=>{
    let total=0;
    arrys.forEach(arr => {
        total+=Number(arr);
    });
    return total;
}
let totalMark=()=>{
    return {caculation};
}
export default totalMark;