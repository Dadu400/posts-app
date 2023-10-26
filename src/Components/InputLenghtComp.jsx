const InputLenghtCalc = ({ posts}) => {

    const totalLength = posts.reduce((total, post) => total + post.title.length, 0);
    return ( 
        <div className="lengthdiv">
            <h4>Posts Titles length is - {totalLength}</h4>
        </div>
     );
}
 
export default InputLenghtCalc;