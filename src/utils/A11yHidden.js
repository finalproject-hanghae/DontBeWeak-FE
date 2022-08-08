import React, { Children } from "react";

const styles = {
  position: "absolute",
  clip: "rect( 0 0 0 0)",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  margin: "-1px",
  border: 0,
  padding: 0,
  whiteSpace: "nowrap",
};

const A11yHidden = ({ tag, focusable, string }) => {
  const [isFocus, setIsFocus] = React.useState(false);
  let attrs = {};
  attrs['tag'] = tag ? tag : undefined ;
  attrs['focusable'] = focusable ? focusable : undefined;
  
  console.log(attrs)
  console.log(isFocus)

  const Tag = tag || 'span'

  return <Tag style={!focusable ? styles : isFocus ? null : styles}
  {...attrs}
  onFocus={()=>{focusable && setIsFocus(true)}}
  onBlur={()=>{focusable && setIsFocus(false)}}
  >{string}</Tag>;
};


// 사용법 <A11yHidden tag={"h1"} string={"제목"} focusable/>
export default A11yHidden;
