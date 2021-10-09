import React, { useEffect } from "react";
import { useState } from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import DataService from "../API/DataService";
import MySelect from "../UI/select/MySelect";
import Loader from "../UI/Loader/Loader";
import { getPagesArray } from "../../utils/pages";
import MyModal from "../UI/modal/MyModal";

import Character from "../Character";

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    species: "",
    status: "",
    gender: "",
  });
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [totalPagesCount, setTotalPagesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  useEffect(() => {
    DataService.getCharacters(selectedFilters, currentPage).then((response) => {
      setCharacters(response);
      setIsDataLoading(false);
    });
    DataService.getPagesCount("character").then((count) => {
      setTotalPagesCount(count);
    });
  }, [currentPage, selectedFilters]);

  const updatePage = () => {
    setCharacters([]);
    setIsDataLoading(true);
  };

  const changePage = (page) => {
    setCurrentPage(page);
    updatePage();
  };

  const onSelectedFilters = (listName, option) => {
    if (listName === "species")
      setSelectedFilters({ ...selectedFilters, species: option });
    if (listName === "status")
      setSelectedFilters({ ...selectedFilters, status: option });
    if (listName === "gender")
      setSelectedFilters({ ...selectedFilters, gender: option });

    updatePage();
  };

  const openModal = (info) => {
    setModalInfo(info);
    setModal(true);
  };
  const closeModal = () => {
    setModalInfo({});
    setModal(false);
  };
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <MySelect
        onChange={(listName, option) => onSelectedFilters(listName, option)}
      />
      {isDataLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <Grid container spacing={4}>
          {characters.map((character, index) => (
            <Character
              key={character.id}
              props={character}
              onClick={(info) => openModal(info)}
            />
          ))}
        </Grid>
      )}
      {getPagesArray(totalPagesCount).map((p) => {
        return (
          <Button key={p} onClick={() => changePage(p)}>
            {p}
          </Button>
        );
      })}
      <MyModal visible={modal} setVisible={setModal} info={modalInfo}>
        <Character
          key={modalInfo.id}
          props={modalInfo}
          fullInfo={true}
          onClick={() => closeModal()}
        />
      </MyModal>
    </Container>
  );
};

export default CharacterPage;
