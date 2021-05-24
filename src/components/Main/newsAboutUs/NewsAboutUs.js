import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getFullSizeContent } from "../../actions/fullSizeContent";
import { getRepos } from "../../actions/repos";

export const NewsAboutUs = () => {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items, shallowEqual);
  const pdf = useSelector(state => state.fullSizeContent.itemsPDF, shallowEqual);
  console.log(pdf);

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  return (
    <div>
      {repos.map(repo => <div >
        <div >
          <div>{repo.name}</div>
          <div>{repo.stargazers_count}</div>
        </div>
        <div>{repo.updated_at}</div>
        <a href={repo.html_url}>link to repo: {repo.html_url}</a>
        <br/>
        <br/>
      </div>)}
      <button onClick={()=>{
        dispatch(getFullSizeContent());
      }}>getpdf</button>
    </div>
  )
};