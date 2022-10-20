import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';

import "../sass/components/footer.css"
const Footer = () => {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-white'>


      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-5'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Dane
              </h6>
              <p>
                Fundacja Rozwoju Edukacji i Społecznej Kreatywności
              </p>
              <p>NIP: 6572174750</p>
              <p>REGON: 383642931</p>
              <p>KRS: 0000790916</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4'>Usługi</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Dotacje
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Kursy i Szkolenia
                </a>
              </p>

            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4'>Socialmedia</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Facebook
                </a>
              </p>

            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4'>Kontakt</h6>
              <p>

                Noniewicza 34 lok. 4 
              </p>
              <p>

                Suwałki 16-400
              </p>
              <p>

                kontakt.fresk@gmail.com
              </p>
              <p>
 661 300 803
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Fundacja Rozwoju Edukacji i Społecznej Kreatywności
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;