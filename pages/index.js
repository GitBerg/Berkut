import styled from 'styled-components'
import MainGrid from '../src/Components/MainGrid'
import Box from '../src/Components/Box'
import { AlurakutMenu } from '../src/lib/alurakutCommons'

function ProfileSideBar(propridades) {
  return (
    <Box>
      <img src={`https://github.com/${propridades.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const randomUser = 'GitBerg';

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={randomUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">Bem vindo(a). {randomUser}!</h1>
          </Box>
        </div>
        <div className="profileCommunity" style={{ gridArea: 'profileCommunity' }}>
          <Box>
            Social
          </Box>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
