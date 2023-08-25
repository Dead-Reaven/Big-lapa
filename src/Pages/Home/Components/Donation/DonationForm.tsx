import React, { useState } from 'react'
import { DonationButton, DonationFormFlex, Grid, StyledAmount } from './Donation.style'

declare global {
  interface Window {
    $ipsp: any
  }
}

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function DonationForm({ setIsModalOpen }: Props) {
  const [amount, setAmount] = useState(0)
  const [checked, setChecked] = useState(false)

  const amounts = [20, 50, 100, 200]

  const handleAmountClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value)
    setChecked(false)
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value)
    setChecked(true)
  }

  const handleSubmit = () => {
    setIsModalOpen(true)
  }

  // function createOrder(amount: number, order_desc: string) {
  //   const button = window.$ipsp.get('button')
  //   button.setMerchantId(1397120)
  //   button.setAmount(amount, 'UAH')
  //   button.setResponseUrl('http://example.com/result/')
  //   button.setHost('pay.fondy.eu')
  //   button.addField({
  //     label: 'Призначення оплати',
  //     name: 'order_desc',
  //     value: order_desc,
  //   })
  //   window.location.href = button.getUrl()
  // }
  return (
    <DonationFormFlex $direction="column" $align="center" $gap="35px">
      <Grid>
        {amounts.map((amount) => (
          <StyledAmount key={amount}>
            <input
              type="radio"
              name="radio"
              value={amount}
              onChange={handleAmountClick}
            />
            <span>{amount} грн</span>
          </StyledAmount>
        ))}
        <StyledAmount>
          <input type="radio" name="radio" value={amount} checked={checked} />
          <input
            type="number"
            placeholder="Інша сума, UAH"
            onKeyDown={(evt) =>
              ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()
            }
            onChange={handleCustomAmountChange}
            onClick={() => setChecked(true)}
          />
        </StyledAmount>
      </Grid>
      <DonationButton onClick={handleSubmit}>Зробити внесок</DonationButton>
    </DonationFormFlex>
  )
}

export default DonationForm
