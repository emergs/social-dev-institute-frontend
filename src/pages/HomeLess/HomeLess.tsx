import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import { AuthContext } from "../../contexts/authContext/AuthContext";

import { ContainerHome } from "../Home/styles";
import {
  BodyHomeLess,
  BodyMissing,
  CardHomeLess,
  DirectionsBottom,
  DirectionsTop,
  HeaderSearchHomeLess,
  Main,
  Search,
} from "./styles";
import Header from "../../components/Header/Header";

import imgSearch from "../../img/search.png";
import imgComeBack from "../../img/ComeBack.png";
import imgProceed from "../../img/Proceed.png";
import imgTeste from "../../img/people01.jpg";
import api from "../../server/api";
import Footer from "../../components/Footer/Footer";
import ResetPage from "../../components/AboutTeam/ResetPage";
import AnimatedPage from "../../components/AnimatedPage";
import { Link } from "react-router-dom";

export default function HomeLess() {
  const {
    homeLess,
    isNextDisabled,
    isGoBackDisabled,
    search,
    setSearchFor,
    next,
    goBack,
  } = useContext(AuthContext);

  console.log(homeLess);

  return (
    <ContainerHome>
      <Header />
      <AnimatedPage>
        <Main>
          <BodyHomeLess>
            <HeaderSearchHomeLess>
              <Search>
                <input
                  type="text"
                  placeholder="Digite sua pesquisa aqui"
                  onChange={(event) => setSearchFor(event.target.value)}
                />

                <button onClick={() => search()}>
                  <BsSearch />
                </button>
              </Search>

              <DirectionsTop>
                <button disabled={isGoBackDisabled} onClick={() => goBack()}>
                  {/* <img src={imgComeBack} alt="Voltar lista de usuarios" /> */}
                  <GrPrevious />
                </button>

                <button disabled={isNextDisabled} onClick={() => next()}>
                  {/* <img src={imgProceed} alt="Adiantar lista de usuarios" /> */}
                  <GrNext />
                </button>
              </DirectionsTop>
            </HeaderSearchHomeLess>
            <BodyMissing>
              {homeLess.length === 0 ? (
                <div>
                  <p>Ops...</p>
                  <p>Nenhum resultado encontrado!</p>
                </div>
              ) : (
                homeLess.map((user) => (
                  <CardHomeLess key={user.id}>
                    <Link to="#">
                      <figure>
                        <img
                          src={
                            user.image?.includes("https")
                              ? user.image
                              : imgTeste
                          }
                          alt="Foto do usuario"
                        />
                        <figcaption>
                          <ul>
                            <li>
                              {" "}
                              <span> Nome: </span> {user.name}
                            </li>
                            <li>
                              {" "}
                              <span> Idade: </span> {user.age}
                            </li>
                            <li>
                              {" "}
                              <span> Descrição física: </span>{" "}
                              {user.description}
                            </li>
                            <li>
                              {" "}
                              <span> Local de registro: </span> {user.location}
                            </li>
                            <li>
                              {" "}
                              <span> Voluntário: </span> {user.volunteer}
                            </li>
                            <li>
                              {" "}
                              <span> Contato: </span> {user.contact}
                            </li>
                            <li>
                              {" "}
                              <span> Data: </span> {user.date}
                            </li>
                          </ul>
                        </figcaption>
                      </figure>
                    </Link>
                  </CardHomeLess>
                ))
              )}
            </BodyMissing>

            <DirectionsBottom>
              <button disabled={isGoBackDisabled} onClick={() => goBack()}>
                {/* <img src={imgComeBack} alt="Voltar lista de usuarios" /> */}
                <GrPrevious />
              </button>

              <button disabled={isNextDisabled} onClick={() => next()}>
                {/* <img src={imgProceed} alt="Adiantar lista de usuarios" /> */}
                <GrNext />
              </button>
            </DirectionsBottom>
          </BodyHomeLess>
        </Main>
        <Footer color={"#435664"} />
        <ResetPage />
      </AnimatedPage>
    </ContainerHome>
  );
}
