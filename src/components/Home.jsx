import React, { useState } from "react";

const Home = () => {
  const [mousehover, setMousehover] = useState(false);

  const handleMouseOver = (key) => {
    setMousehover(key);
  };

  const handleMouseOut = () => {
    setMousehover(false);
  };

  const cart = [
    {
      id: 1,
      logosrc:
        "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2018/11/appon-home-icon-1.png",
      title: "Cloud",
      disrc:
        "24/7 Online #1 Accounting Software in Pakistan, anywhere, anytime ! Accounting in the cloud. Check your reports on the go, access from your iPad and beyond, make collaboration easy, with the security and backups that you need in any business application. No worries of data loss.",
    },
    {
      id: 2,
      logosrc:
        "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/08/appon-home-icon-2.png",
      title: "Simple",
      disrc:
        "No more old dated complicated accounting software. No more reliance on local computer. Keep your 'Hisaab' on your finger tips. No Accounting knowledge is required to operate our system. With easy to use reports and quick dashboard access to all your daily reports, Hisaab.pk is undoubtedly the best accounting software in Pakistan",
    },
    {
      id: 3,
      logosrc:
        "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/08/calculator-2.png",
      title: "Accounting",
      disrc:
        "Track your expenses, directly email invoices and quotations to your customers, and keep everything you need to manage your business finances in your control with the software. With double entry accounting software in Pakistan, you can easily prepare the financial and tax reports that your accountant/tax lawyer relies on.",
    },
  ];

  const slideshow = [
    {
      id: 1,
      logosrc:
        " https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/TIMELENDERS-web.jpg",
    },
    {
      id: 2,
      logosrc:
        "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/faucet.png",
    },
    {
      id: 3,
      logosrc:
        "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/fine-star.png",
    },
    {
      id: 4,
      logosrc:
        "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/joint.png",
    },
    {
      id: 5,
      logosrc:
        "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/innolytix.png",
    },
    {
      id: 6,
      logosrc:
        "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/resize-16306471271410170685galaxy.jpg",
    },
    {
      id: 7,
      logosrc:
        "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/resize-16306471521816331164gandhara.jpg",
    },
    {
      id: 8,
      logosrc:
        "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/resize-1630647216898879555nkr.jpg",
    },
    {
      id: 9,
      logosrc:
        "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/resize-1630647256260795541vetz.jpg",
    },
    {
      id: 10,
      logosrc:
        "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/archi-homes.png",
    },
  ];
  const card = [
    {
      id: 1,
      logo: "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/invoice.png",
      title: "Invoicing",
      title2: "HR & Payroll",
      discr2: "flipping check",
      discr:
        "Impress your clients with professional invoices that take only seconds to raise",
    },
    {
      id: 2,
      logo: "	https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/purchase.png",
      title: "Purchasing",
      title2: "HR & Payroll",
      discr2: "flipping check",
      discr:
        "Use Hisaab to manage your procurements to track and monitor your costs effortlessly.",
    },
    {
      id: 3,
      logo: "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/inventory.png",
      title: "Inventory",
      title2: "HR & Payroll",
      discr2: "flipping check",
      discr:
        "Inventory management including POs, GRNs, supplier invoices, multiple locations - production etc.",
    },
    {
      id: 4,
      logo: "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/General-accounting-1.png",
      title: "General Accounting",
      title2: "HR & Payroll",
      discr2: "flipping check",
      discr:
        "Make your accountants life easy with automatic checks and balances to ensure accuracy and compliance.",
    },
    {
      id: 5,
      logo: "https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/report.png",
      title: "Reports",
      title2: "HR & Payroll",
      discr2: "flipping check",
      discr:
        "Use our cloud accounting software to customize reports to help you make smart choice for your business.",
    },
    {
      id: 6,
      logo: "	https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/HR.png",
      title: "HR & Payroll",
      title2: "HR & Payroll",
      discr2: "flipping check",
      discr:
        "Manage your company's Payroll, EPF, ETF, Stamp duty payments and make life of HR department easy.",
    },
  ];

  return (
    <>
      <div className="Home">
        <div className=" container">
          <div className="home_screen">
            <div className="home_left">
              <div className="home_title">
                <h1>Take Your Business on Cloud Accounting Software</h1>
              </div>

              <div className="animtion"></div>

              <div className="home_sub_title">
                <h2>With Pakistan's premium web accounting software and ERP</h2>
                <button className="btn">Click For Demo</button>
              </div>
            </div>

            <div className="home_right">
              <img
                src="https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/homepage-laptopipad.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="home_2nd_sec container">
        <div className="home_2nd_sec_header">
          <h1>Best Online Accounting Software In Pakistan</h1>
        </div>
        <div className="home_2nd_sec_discr">
          <p>
            Integrated modular approach is one of the attractions that leads you
            to the<span>ERP software. </span>It is not the only attraction for
            sure. However, if you are so considerate about the accounts of
            business then it worth your attention. Along with accounts, you will
            be able to have better planning and resource management for
            business. Generating different reports, creating policies and
            strategies will be easier. It is your gateway to a successful
            business that will grow and never let you get back. Just choose the
            supportive business tools wisely and initiate your business
            progress.
          </p>
        </div>
      </div>

      <div className="home_3rd_sec container">
        {cart.map((val, key) => (
          <div className="cart" id={key}>
            <div className="cart_body ">
              <div className="cart_logo">
                <img src={val.logosrc} alt="logo" />
              </div>
              <div className="cart_heading">
                <h1>{val.title}</h1>
              </div>
              <div className="cart_discr">
                <p>{val.disrc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" home_4rth_sec container">
        <div className="slider_header">
          <h1>Clientele</h1>
        </div>
        <div className="slider">
          {slideshow.map((val, key) => (
            <div className="showslider" id={key}>
              <img src={val.logosrc} alt="img" />
            </div>
          ))}
        </div>
      </div>

      <div className="home_5th_sec container">
        <div className="home_5th">
          <div className="left_side">
            <div className="left_side_details">
              <h1>Know us More</h1>
              <p>
                Hisaab business accounting software and Enterprise Resource
                Planning system is managed by DYS Solutions (Pvt). Ltd which is
                a management consultant and accounting company, founded in 2009
                and is offering different on-line and web based business
                accounting software in Pakistan
              </p>
              <button>More About Us</button>
            </div>
          </div>

          <div className="right_side">
            <div className="right_side_details ">
              <h1>Review by Mr. Kamran Zahid from Timelenders</h1>
              <video width="700" height="480" controls>
                <source></source>
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="home_6th_sec container">
        <div className="card">
          <div className="flip_card">
            {card.map((value, key) => (
              <div
                className="cardbody"
                id={key}
                onMouseOver={() => handleMouseOver(key)}
                onMouseOut={handleMouseOut}
              >
                {mousehover !== key ? (
                  <div className="card_front">
                    <div className="cardbody_logo">
                      <img src={value.logo} alt="" />
                    </div>
                    <div className="cardbody_title">
                      <h1> {value.title} </h1>
                    </div>
                    <div className="cardbody_pera">
                      <p>{value.discr}</p>
                    </div>
                  </div>
                ) : (
                  <div className="card_back">
                    <div className="cardbody_title">
                      <h1> {value.title2} </h1>
                    </div>
                    <div className="cardbody_pera">
                      <p>{value.discr2}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="home_7th_sec ">
        <div className="container">
          <div className="home_7th_view">
            <div className="home_7th_sec_left">
              <h1>Discover Hisaab Now. </h1>
              <p>
                Hisaab.pk Accounting Software is designed to cater all the
                accounting and financial reporting needs of small and medium
                businesses. Our clients range from service, trading houses,
                import export, manufacturers, FMCG, retailers etc. Hisaab
                accounting software in Pakistan has a flexible structure that
                can be tailor made as per user’s requirements. It is equipped
                with all the latest reporting and business software tools, easy
                to use interface and quick access dashboards. To test drive the
                app functions and to explore further details please click on the
                DEMO link.
              </p>
              <button>Demo</button>
            </div>
            <div className="home_7th_sec_right">
              <img
                src="https://cdn-dhmdp.nitrocdn.com/GPljzOlRKjBWThsdnhAYRLAHdfnRxOCF/assets/static/optimized/rev-ea32e8e/wp-content/uploads/2021/09/phone-dashboard-1600x2048.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
