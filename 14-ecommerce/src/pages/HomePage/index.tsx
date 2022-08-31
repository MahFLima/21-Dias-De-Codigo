import React, { useState } from 'react';
import { ButtonFilter } from '../../components/ButtonFilter';
import Card from '../../components/Card';
import { Header } from '../../components/Header';
import data from "../../data"
import { IconAll, IconCamera, IconConsole, IconCPU, IconFilter, IconMonitor, SearchIcon } from '../../styles/icons';

import {
  Container, SearchInput,
  Button,
  Filter,
  FilterResponsive,
  ListProduct,
  MenuFilter
} from './styles';


export const HomePage: React.FC = () => {
  const [description, setDescription] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [isActiveMenuFilter, setIsActiveMenuFilter] = useState(false)

  const result = description.length > 0 ? data.filter(item => item.description === description) : []
  const listSearch = searchInput.length > 0 ? data.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase())) : []

  function handleDescription(description: string) {
    setDescription(description)
    setIsActiveMenuFilter(false)
  }

  function handleMenuFilter() {
    isActiveMenuFilter ? setIsActiveMenuFilter(false) : setIsActiveMenuFilter(true)
  }

  return (
    <Container>
      <Header onChange={(e) => { setSearchInput(e.target?.value) }} />
      <SearchInput>
        <input type="text" placeholder="pesquisar" onChange={(e) => { setSearchInput(e.target?.value) }} />
        <Button><SearchIcon /></Button>
      </SearchInput>

      <FilterResponsive>
        <h1>{description}</h1>
        <button onClick={handleMenuFilter}>
          Filter
          <IconFilter />
        </button>
      </FilterResponsive>

      <Filter>
        <ButtonFilter onClick={() => { handleDescription("") }}>
          <div style={{ background: " #F9E4D3" }}>
            <IconAll />
          </div>
          <p>All</p>
        </ButtonFilter>
        <ButtonFilter onClick={() => { handleDescription("Camera") }}>
          <div style={{ background: "#E3F5FF" }}>
            <IconCamera />
          </div>
          <p>Camera</p>
        </ButtonFilter>
        <ButtonFilter onClick={() => { handleDescription("Console") }}>
          <div style={{ background: " #FBF2F4" }}>
            <IconConsole />
          </div>
          <p>Console</p>
        </ButtonFilter>
        <ButtonFilter onClick={() => { handleDescription("Monitor") }}>
          <div style={{ background: " #D6C8FC" }}>
            <IconMonitor />
          </div>
          <p>Monitor</p>
        </ButtonFilter>
        <ButtonFilter onClick={() => { handleDescription("CPU") }}>
          <div style={{ background: "#F1FFF2" }}>
            <IconCPU />
          </div>
          <p>CPU</p>
        </ButtonFilter>
      </Filter>

      {isActiveMenuFilter ? (
        <MenuFilter>
          <ButtonFilter onClick={() => { handleDescription("") }}>
            <div style={{ background: " #F9E4D3" }}>
              <IconAll />
            </div>
            <p>All</p>
          </ButtonFilter>
          <ButtonFilter onClick={() => { handleDescription("Camera") }}>
            <div style={{ background: "#E3F5FF" }}>
              <IconCamera />
            </div>
            <p>Camera</p>
          </ButtonFilter>
          <ButtonFilter onClick={() => { handleDescription("Console") }}>
            <div style={{ background: " #FBF2F4" }}>
              <IconConsole />
            </div>
            <p>Console</p>
          </ButtonFilter>
          <ButtonFilter onClick={() => { handleDescription("Monitor") }}>
            <div style={{ background: " #D6C8FC" }}>
              <IconMonitor />
            </div>
            <p>Monitor</p>
          </ButtonFilter>
          <ButtonFilter onClick={() => { handleDescription("CPU") }}>
            <div style={{ background: "#F1FFF2" }}>
              <IconCPU />
            </div>
            <p>CPU</p>
          </ButtonFilter>
        </MenuFilter>
      ) : (
        <ListProduct>
          {searchInput ? (

            listSearch.map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  imgUrl={item.imgUrl}
                  value={item.value}
                />
              )
            })

          ) : (
            description ? (
              result.map((item, index) => {
                return (
                  <Card
                    key={index}
                    title={item.title}
                    imgUrl={item.imgUrl}
                    value={item.value}
                  />
                )
              })
            ) :
              (
                data.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      title={item.title}
                      imgUrl={item.imgUrl}
                      value={item.value}
                    />
                  )
                })
              )
          )}
        </ListProduct>
      )}

    </Container>
  );
}



