import VideoModal from '@components/common/VideoModal'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSectionEleven = () => {
  return (
    <section className="hero-eleven bg-dark-black pt-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h1 className="fw-bold display-5 text-white">
                Trusted & Secure Trading Crypto Wallet
              </h1>
              <p className="lead text-white">
                You might wonder why a designer would choose to use Morem text
                paragraphs in English or their native language architect interactive.
              </p>
              <div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                <Link href="/request-demo" >
                 <a className="rounded-btn"> Get Started</a>
                </Link>
                <VideoModal className="true"/>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="crypto-hero-img pt-80">
              <ul className="currency-icon list-unstyled">
                <li>
                  <Image src="/currency1.svg" alt="icon" width={59} height={59} />
                </li>
                <li>
                  <Image src="/currency2.svg" alt="icon" width={28} height={46}/>
                </li>
                <li>
                  <Image src="/currency3.svg" alt="icon" width={42} height={26}/>
                </li>
                <li>
                  <Image src="/currency4.svg" alt="icon" width={31} height={31}/>
                </li>
              </ul>
              <Image
                src="/crypto-person.png"
                className="Image-fluid cripto-img"
                alt="person"
                width={641}
                height={610}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSectionEleven