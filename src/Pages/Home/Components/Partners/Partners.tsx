import { useState } from 'react'
import { PartnerTypes } from '../../../../API/types'
import useGet from '../../../../API/useGet'
import Container from '../../../../Components/UI/Container.style'
import { PartnersSection, PartnersTitle, PartnersFlex } from './Partners.style'

function Partners() {
  const [partnersState, setPartnersState] = useState<PartnerTypes[]>([])

  useGet({
    category: 'partners',
    state: partnersState,
    setState: setPartnersState,
  }) as PartnerTypes[]

  return (
    <>
      {partnersState.length !== 0 && (
        <PartnersSection>
          <Container>
            <PartnersTitle>Партнери</PartnersTitle>
            <PartnersFlex>
              {partnersState.map((partner) => (
                <img
                  src={partner?.encodedBase64 ?? (partner.src as string)}
                  key={partner.id}
                  alt="partner"
                />
              ))}
            </PartnersFlex>
          </Container>
        </PartnersSection>
      )}
    </>
  )
}

export default Partners
