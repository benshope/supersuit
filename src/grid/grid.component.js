import styled from 'styled-components'

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  grid-auto-rows: auto;
  align-content: start;
  > * {
    margin: var(--spacing_0_25, 0.25em);
    overflow: hidden;
    max-width: 100%;
  }
`

export default GridDiv