import React, { useEffect } from "react";
import styles from "./TechnologiesScreen.module.scss";
import CardTechnology from "./cardTechnology/CardTechnology";
import Search from "./search/Search";
import { useSelector, useDispatch } from "react-redux";
import { searchTechnologies, fetchTechnologies } from "../../actions/technology";

const TechnologiesScreen = () => {
  const dispatch = useDispatch();
  const technologies = useSelector((state) => state.technologies);
  const { list, filteredList } = technologies;

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, [dispatch]);

  

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    dispatch(searchTechnologies(searchText));
  };


  return (
    <>
      <Search handleSearch={handleSearch} />
      {filteredList.length > 0 &&
        filteredList.map((technology) => (
          <CardTechnology
            tech={technology.tech}
            year={technology.year}
            author={technology.author}
            license={technology.license}
            language={technology.language}
            type={technology.type}
            logo={technology.logo}
            key={technology.tech}
          />
        ))}
    </>
  );
};

export default TechnologiesScreen;
