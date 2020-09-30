import React, { useEffect } from "react";
import styles from "./TechnologiesScreen.module.scss";
import CardTechnology from "./cardTechnology/CardTechnology";
import Search from "./search/Search";
import { useSelector, useDispatch } from "react-redux";
import {
  searchTechnologies,
  startFetchTechnologies,
} from "../../actions/technology";
import Spinner from "../spinner/Spinner";

const TechnologiesScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { auth, technologies } = state;
  const { filteredList, isLoading } = technologies;

  useEffect(() => {
    auth.token && dispatch(startFetchTechnologies());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    dispatch(searchTechnologies(searchText));
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <Search handleSearch={handleSearch} />
      <div className={styles.containerCards}>
        {filteredList.length > 0 &&
          filteredList.map((technology) => 
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
          )}
      </div>
      <div className={styles.containerTotalTech}>
        <h1 className={styles.totalTech}>
          Total Technologies: {filteredList.length}
        </h1>
      </div>
    </>
  );
};

export default TechnologiesScreen;
