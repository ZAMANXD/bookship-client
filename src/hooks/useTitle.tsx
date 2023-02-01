import { useEffect } from "react";

const useTitle = (title:string) => {

  useEffect(() => {
    document.title = `BookShip${title}`;
  }, [title]);
  
};

export default useTitle;