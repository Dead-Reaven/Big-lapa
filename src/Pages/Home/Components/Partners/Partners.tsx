import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import getPartner from '../../../../API/fetchers/getPartnerImg'
import getPartnersId from '../../../../API/fetchers/getPartnersId'
import { PartnerTypes } from '../../../../API/types'
import Container from '../../../../Components/UI/Container.style'
import { PartnersFlex, PartnersSection, PartnersTitle } from './Partners.style'

function Partners() {
  const [partnersState, setPartnersState] = useState<PartnerTypes[]>([])

  useQuery({
    queryKey: ['partnersId'],
    initialData: [],
    queryFn: getPartnersId,
    onSuccess: (data) => mutatePartnersIMG(data),
    refetchOnWindowFocus: false,
  })

  const fetchPartnersIMG = (partnersIds: string[]) => {
    return Promise.all(partnersIds.map((id) => getPartner(id)))
  }

  const { mutate: mutatePartnersIMG } = useMutation(fetchPartnersIMG, {
    onSuccess: (data) => setPartnersState(data),
  })

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
