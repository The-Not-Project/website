
// import { useState } from 'react';
// import { DonateContainer } from './styles';

import seoKeywords from "@/app/constants/seoKeywords";

export const metadata = {
  title: 'Donate | The Not Project',
  description: 'Support The Not Project by making a donation. Your contribution helps us continue our mission of sharing stories and fostering community.',
  keywords: seoKeywords.donate
}

export default function DonatePage() {
  // const [donation, setDonation] = useState(0);
  return (
    <div>
      {/* <DonateContainer>
        GIVE US MONEY <br />
        <input type='number' placeholder='minimun $46' defaultValue={donation || ''} onChange={e => setDonation(Number(e.target.value))} />
        <button onClick={() => {
          if (donation < 46) {
            alert('You fucking blind or something?');
            return;
          }
          alert('I wish nigga');
        }}>take my money</button>
      </DonateContainer> */}
    </div>
  );
}
