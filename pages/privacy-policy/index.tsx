/** @format */

import Head from "next/head";
import styled from "styled-components";
import device from "../../styles/breakpoints";

const Container = styled.div`
  width: 70%;
  margin: 2em auto;
  color: #ffffff;
  text-align: justify;

  @media ${device.mobile} {
    width: 90%;
  }
`;

const StyledHeading = styled.h3`
  font-size: 2rem;
  margin-bottom: 2em;
  text-align: center;
  text-transform: uppercase;
`;

const TextContainer = styled.div`
  & ol {
    padding-left: 1.5em;
  }

  & p {
    margin-bottom: 0.5em;
  }
`;

const PrivacyPolicy = () => {
  return (
    <main>
      <Head>
        <title>TradingLeagues: Privacy Policy</title>
      </Head>
      <Container>
        <StyledHeading>Privacy Policy</StyledHeading>
        <TextContainer>
          <p className="c0">
            <span className="c3 c2">1. GENERAL</span>
          </p>
          <p className="c0">
            <span className="c2">
              1.1 Rain Platforms India Private Limited(“
            </span>
            <span className="c1">TradingLeagues</span>
            <span className="c2">”, “</span>
            <span className="c1">We</span>
            <span className="c2">”, “</span>
            <span className="c1">Our</span>
            <span className="c2">”, “</span>
            <span className="c1">Us</span>
            <span className="c2">
              ”) is committed to the protection of personal information provided
              by the users (“
            </span>
            <span className="c1">You</span>
            <span className="c2">”, “</span>
            <span className="c1">Your</span>
            <span className="c2">”, “</span>
            <span className="c1">User</span>
            <span className="c2">
              ”) to TradingLeagues. You agree that Your use of TradingLeagues
              mobile application (“
            </span>
            <span className="c1">App</span>
            <span className="c2">
              ”) iTradingLeaguesies Your consent to the collection, retention
              and use of Your personal information in accordance with the terms
              of this Privacy Policy (“
            </span>
            <span className="c1">Privacy Policy</span>
            <span className="c3 c2">”).</span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              1.2 This Privacy Policy is an electronic record in the form of an
              electronic contract formed under the information Technology Act,
              2000 and the rules made thereunder and the amended provisions
              pertaining to electronic documents / records in various statutes
              as amended by the information Technology Act, 2000. This Privacy
              Policy does not require any physical, electronic or digital
              signature and is a legally binding document between You and
              TradingLeagues.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              1.3 We take the privacy of Our Users seriously. We are committed
              to safeguarding the privacy of Our Users while providing a
              personalized and valuable service.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              1.4 No User information is rented or sold to any third party. When
              You use the App, the App may collect Your device number and other
              personal information. A high standard of security is maintained by
              Us for Our Users. However, the transmission of information via the
              internet or telephone networks is not coTradingLeaguesetely
              secure. While We do Our best to protect Your information,
              particularly with respect to protection of Your personal data,
              TradingLeagues cannot ensure the security of Your data transmitted
              via the internet, telephone or any other networks.
            </span>
          </p>
          <p className="c0">
            <span className="c2">
              1.5 By visiting the Platform and creating an account on the
              Platform, You grant TradingLeagues and its group companies your
              irrevocable and informed consent to use your profile name, profile
              picture, and Winnings in a Contest and/ or Winnings in total on
              the Platform (“
            </span>
            <span className="c1">Your Profile Information</span>
            <span className="c3 c2">
              “) for advertisements, promotions, offers, and any other sponsored
              content that TradingLeagues and its group companies may display on
              the Platform or any other marketing channels, including its
              digital channels, television, print and publication, without
              requiring any further consent from You and without being required
              to pay any compensation to You.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              1.6 You further grant to TradingLeagues an exclusive,
              transferable, sub-licensable, royalty-free and worldwide licence
              to host, use, distribute, modify, run, copy, publicly perform or
              display, translate and create derivative works from Your Profile
              Information.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              1.7 You understand, represent and accept that Your Profile
              Information or any related materials will not violate the rights
              of any third party rights or give rise to any claim that another
              party’s rights have been or will be violated as a result of
              TradingLeagues’s use or publication of Your Profile Information.
              You understand and agree that You will be liable to TradingLeagues
              for any damage or cost (including reasonable attorney fees) it may
              suffer arising out of its use of Your Profile Information. You
              also understand that you will not be entitled to receive any
              royalties for the use of your Profile Information by or through
              TradingLeagues.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              1.8 You understand and grant to TradingLeagues, its subsidiaries,
              affiliates, successors and those acting with its authority, with
              respect to Your Profile Information all copyrights and derivative
              rights in Your Profile Information and a non-exclusive, perpetual
              right to use, publish, re-publish or reproduce Your Profile
              Information by any means TradingLeagues sees fit for the purposes
              stated above.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              1.9 By using the Platform, you irrevocably waive any claim against
              TradingLeagues relating to the use of Your Profile Information and
              promise not to bring any such claim or action in the future. You
              also waive any right to inspect, modify, approve or disapprove the
              content, layout, representation, presentation or other aspect of
              Your Profile Information as recorded by TradingLeagues during your
              use of the Platform.
            </span>
          </p>
          <p className="c0">
            <span className="c2">
              1.10 Access to the contents available through the App is
              conditional upon Your approval of this Privacy Policy which should
              be read together with the terms and conditions of use (“
            </span>
            <span className="c1">Terms</span>
            <span className="c2">
              ”). You acknowledge that this Privacy Policy, together with our
              Terms, forms Our agreement with You in relation to Your use of the
              App (“
            </span>
            <span className="c1">Agreement</span>
            <span className="c2 c3">”).</span>
          </p>
          <p className="c0">
            <span className="c2">2. </span>
            <span className="c4 c1">INFORMATION COLLECTED</span>
          </p>
          <p className="c0">
            <span className="c3 c2">2.1 Traffic Data Collected</span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              In order to provide the App, We automatically track and collect
              the following categories of information when You use the App:
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">(i) IP addresses;</span>
          </p>
          <p className="c0">
            <span className="c3 c2">(ii) Domain servers; and</span>
          </p>
          <p className="c0">
            <span className="c2">
              (iii) Other information with respect to Your device, interaction
              of Your device with the App and applications (collectively “
            </span>
            <span className="c1">Traffic Data</span>
            <span className="c3 c2">”).</span>
          </p>
          <p className="c0">
            <span className="c3 c2">2.2 Personal Information Collected</span>
          </p>
          <p className="c0">
            <span className="c2">
              In order to provide the App, We may require You to provide Us with
              certain information that personally identifies You (“
            </span>
            <span className="c1">Personal Information</span>
            <span className="c3 c2">
              “). Personal Information includes the following categories of
              information:
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              (i) Contact data (such as Your email address, phone number and any
              details of Your contacts); and
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              (ii) Demographic data (such as Your time zone, Your postal address
              and location details); and
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              If You communicate with Us by, for exaTradingLeaguese, e-mail or
              letter, any information provided in such communication may be
              collected by TradingLeagues.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              (iii) Financial data (such as Your account details, e-wallet
              details, credit or debit card details etc. that You have provided
              Us for disbursement of prizes and coupons).
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              2.3 Our App may transmit Your Personal Information to Our internal
              servers. We have iTradingLeaguesemented commercially reasonable
              physical, managerial, operational and technical security measures
              to protect the loss, misuse and alteration and to preserve the
              security of the Personally Information in Our care. Finally, this
              information is used in accordance with applicable law for our
              business purposes and to provide You with useful features.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              2.4 Our App may contain links to third party websites or
              applications. You agree and understand that privacy policies of
              these websites are not under Our control. You understand that once
              You leave Our servers, use of any information You provide shall be
              governed by the privacy policy of the operator of the site used by
              You.
            </span>
          </p>
          <p className="c0">
            <span className="c2">3. </span>
            <span className="c4 c1">DISCLOSURE OF PERSONAL INFORMATION</span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              3.1 We do not disclose Your Personal Information to any third
              parties other than to TradingLeagues’s affiliates or other trusted
              business or persons, based on strict adherence and in
              coTradingLeaguesiance with Our Privacy Policy and any other
              appropriate confidentiality and security measures.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              3.2 We use Our best efforts to use information in aggregate form
              (so that no individual User is identified) for the following
              purposes:
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">3.2.1 To build up marketing profiles;</span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              3.2.2 To aid strategic development, data collection and business
              analytics;
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              3.2.3 To provide seamless and swift delivery of prizes and coupons
              to You;
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              3.2.4 To manage Our relationship with advertisers and partners;
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">3.2.5 To audit usage of the App; and</span>
          </p>
          <p className="c0">
            <span className="c2">
              3.2.6 To enhance User experience in relation to the App
              (“collectively, “
            </span>
            <span className="c1">Permitted Use</span>
            <span className="c3 c2">”).</span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              3.3 We reserve the right to disclose Personal Information if
              required to do so by law or if We believe that it is necessary to
              do so to protect and defend the rights, property or personal
              safety of TradingLeagues, the App, or Our Users.
            </span>
          </p>
          <p className="c0">
            <span className="c2">4. </span>
            <span className="c4 c1">CONFIDENTIALITY</span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              4.1 Except as otherwise provided in this Privacy Policy, We will
              keep Your Personal Information private and will not share it with
              third parties, unless We believe in good faith that disclosure of
              Your Personal Information or any other information We collect
              about You is necessary for Permitted Use or to:
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              4.1.1 CoTradingLeaguesy with a court order or other legal process;
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              4.1.2 Protect the rights, property or safety of TradingLeagues or
              another party;
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              4.1.3 Enforce the Agreement, including Terms; or
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              4.1.4 Respond to claims that any posting or other content violates
              the rights of third-parties.
            </span>
          </p>
          <p className="c0">
            <span className="c2">5. </span>
            <span className="c4 c1">SECURITY</span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              5.1 The security of Your Personal Information is important to Us.
              We follow generally accepted industry standards to protect the
              Personal Information submitted to Us, both during transmission and
              once We receive it. All information gathered on Our Website is
              securely stored within Our controlled database. The database is
              stored on servers secured behind a firewall; access to the servers
              is password-protected and is strictly limited.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              5.2 Although We make best possible efforts to store Personal
              Information in a secure operating environment that is not open to
              the public, You should understand that there is no such thing as
              coTradingLeaguesete security, and We do not guarantee that there
              will be no unintended disclosures of Your Personal Information. If
              We become aware that Your Personal Information has been disclosed
              in a manner not in accordance with this Privacy Policy, We will
              use reasonable efforts to notify You of the nature and extent of
              such disclosure (to the extent We know that information) as soon
              as reasonably possible and as permitted by law.
            </span>
          </p>
          <p className="c0">
            <span className="c4 c1">6. COOKIES</span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              6.1 To improve the responsiveness of the sites for Our Users, We
              may use “cookies”, or similar electronic tools to collect
              information to assign each visitor a unique, random number as a
              User Identification (User ID) to understand the User’s individual
              interests using the Identified Computer. Unless You voluntarily
              identify yourself (through registration, for exaTradingLeaguese),
              We will have no way of knowing who You are, even if We assign a
              cookie to Your computer. The only personal information a cookie
              can contain is information You supply. A cookie cannot read data
              off Your hard drive. Our advertisers may also assign their own
              cookies to Your browser (if You click on their ads), a process
              that We do not control.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              6.2 Our web servers automatically collect limited information
              about Your computer’s connection to the Internet, including Your
              IP address, when You visit Our site. (Your IP address is a number
              that lets computers attached to the Internet know where to send
              You data — such as the web pages You view.) Your IP address does
              not identify You personally. We use this information to deliver
              Our web pages to You upon request, to tailor Our site to the
              interests of Our Users, to measure traffic within Our site and let
              advertisers know the geographic locations from where Our visitors
              come.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              7. UPDATES AND CHANGES TO PRIVACY POLICY
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              7.1 We reserve the right, at any time, to add to, change, update,
              or modify this Privacy Policy so please review it frequently. If
              We do, then We will post these changes on this page. In all cases,
              use of information We collect is subject to the Privacy Policy in
              effect at the time such information is collected.
            </span>
          </p>
          <p className="c0">
            <span className="c2">8. </span>
            <span className="c4 c1">YOUR RIGHTS</span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              8.1 You have a right to correct any errors in Your Personal
              Information available with Us. You may request Us in writing that
              We cease to use Your Personal Information.
            </span>
          </p>
          <p className="c0">
            <span className="c4 c1">RESTRICTION OF LIABILITY</span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              9.1 TradingLeagues makes no claims, promises or guarantees about
              the accuracy, coTradingLeagueseteness, or adequacy of the contents
              available through the App and expressly disclaims liability for
              errors and omissions in the contents available through the App.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              9.2 No warranty of any kind, iTradingLeaguesied, expressed or
              statutory, including but not limited to the warranties of
              non-infringement of third party rights, title, merchantability,
              fitness for a particular purpose and freedom from computer virus,
              is given with respect to the contents available through the App or
              its links to other internet resources as may be available to Your
              through the App.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              9.3 Reference in the App to any specific commercial products,
              processes, or services, or the use of any trade, firm or
              corporation name is for the information and convenience of the
              public, and does not constitute endorsement, recommendation, or
              favoring by TradingLeagues.
            </span>
          </p>
          <p className="c0">
            <span className="c3 c2">
              If You have questions or concerns, feel free to email Us or to
              correspond at help@tradinleagues.in and We will attempt to address
              Your concerns.
            </span>
          </p>
          <p className="c8">
            <span className="c3 c6"></span>
          </p>
        </TextContainer>
      </Container>
    </main>
  );
};

export default PrivacyPolicy;
