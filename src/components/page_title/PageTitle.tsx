import React from "react";

type PageTitlePropsType = {
    title: string,
};

function PageTitle(props: PageTitlePropsType) {
  return (
      <h2>
          {props.title}
      </h2>
  );  
};

export default PageTitle;